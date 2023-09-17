
# Uploading a document to FileVine

## 1. Before interacting with the Filevine API, we need to authenticate and acquire certain headers that will be used in the requests.


```
export const getHeaders = async () => {
  const date = new Date();
  date.setMilliseconds(511);
  const timestamp = date.toISOString();
  const apiHash = crypto.MD5(`${apiKey}/${timestamp}/${apiSecret}`).toString();

  const sessionResponse = await axios.post(
    "https://api.filevine.io/session",
    {
      mode: "key",
      apiKey: apiKey,
      apiHash: apiHash,
      apiTimestamp: timestamp,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const accessToken = sessionResponse.data.accessToken;
  const refreshToken = sessionResponse.data.refreshToken;
  const userId = sessionResponse.data.userId;
  const orgId = sessionResponse.data.orgId;

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
    "x-fv-sessionid": refreshToken,
    "x-fv-userid": userId,
    "x-fv-orgid": orgId,
  };
  await AsyncStorage.setItem("headers", JSON.stringify(headers));

  return headers;
};
```

## 2. Document Selection

   ```
  const handlePressUpload = async () => {
    try {
      const documentPickerResponse = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      await handleDocumentOperation(
        documentPickerResponse.name,
        documentPickerResponse.size,
        documentPickerResponse.uri
      );
    } catch (e) {
      console.log("error documentPicker", e);
    }
  };
```


## 3. Uploading the Document to Filevine

   ```
  const handleDocumentOperation = async (fileName, size, uri) => {
    const headers = await getHeaders();

    axios
      .post(
        `https://api.filevine.io/core/documents`,
        {
          filename: fileName,
          size: size,
        },
        {
          headers: headers,
        }
      )
      .then(async (res) => {
        const url = res?.data?.url;
        const contentType = res?.data?.contentType;
        const documentId = res?.data?.documentId.native;
        const projectId = props.projectId;

        const existingDocuments = await AsyncStorage.getItem(
          `allDocumentsId${projectId}`
        );
        let allDocumentsId = [];

        if (existingDocuments) {
          allDocumentsId = JSON.parse(existingDocuments);
        }

        allDocumentsId.push(documentId);

        await AsyncStorage.setItem(
          `allDocumentsId${projectId}`,
          JSON.stringify(allDocumentsId)
        );

        if (url) {
          ReactNativeBlobUtil.fetch(
            "PUT",
            url,
            {
              "Content-Type": contentType,
            },
            ReactNativeBlobUtil.wrap(uri)
          )
            .then((res) => {
              axios
                .post(
                  `https://api.filevine.io/core/projects/${props.projectId}/documents/${documentId}`,
                  {
                    documentId: { Native: documentId },
                    filename: fileName,
                    size: size,
                    projectId: { Native: props.projectId },
                    uploadDate: new Date().toISOString,
                    hashtags: ["doc"],
                  },
                  {
                    headers: {
                      ...headers,
                      "Content-Type": "application/json",
                    },
                  }
                )
                .then(async (res) => {
                  Alert.alert("Upload success");
                })
                .catch((error) => {
                  console.log("error", error);
                })
            })
            .catch((error) => {
              console.log("PUT error", error);
              Alert.alert("File Type not Supported");
            });
        }
      })
      .catch((error) => {
        console.log("handleDocumentOperation error", error);
      });
  };
```
