import { apiClient } from './common'

const getDocListPath =
  process.env.REACT_APP_CONTENT_URL ||
  'https://firebasestorage.googleapis.com/v0/b/openapi-ui.appspot.com/o/content.json?alt=media'

export const getDocumentationList = () => apiClient.get(getDocListPath)
