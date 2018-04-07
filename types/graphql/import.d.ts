import {DocumentNode} from './language';

// enables
// import schema from 'schema.graphql'
// see https://github.com/apollographql/graphql-tag/issues/59#issuecomment-302393028

declare module '*.graphql' {
  const value: DocumentNode;
  export default value;
}