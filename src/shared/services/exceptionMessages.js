export const AddServerValidationError = 'Wrong format. It should be ":server add name username:password@host:port"'
export const CreateDataSourceValidationError = 'Wrong format. It should be ":datasource create {"name": "myName", "command": "RETURN rand()", "bookmarkId":"uuid-of-existing-bookmark", "refreshInterval": 10, "parameters": {}}"'
export const RemoveDataSourceValidationError = 'Wrong format. It should be ":datasource remove uuid-of-existing-datasource"'
export const BoltConnectionError = 'Could not get connection #id#'
export const BoltError = '#code# - #message#'
export const Neo4jError = '#message#'
export const UnknownCommandError = 'Unknown command #cmd#'
export const BookmarkNotFoundError = 'No connection with the name #name# found. Add a bookmark before trying to connect.'
export const OpenConnectionNotFoundError = 'No open connection with the name #name# found. You have to connect to a bookmark before you can use it.'
export const CouldNotFetchRemoteGuideError = 'Can not fetch remote guide: #error#'