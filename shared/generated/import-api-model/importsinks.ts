//Generated file, please do not change

import { ImportResourceType } from './common'

/**
	<p>An import sink is the entry point for import resources from other systems.</p>
	<p>It has an unique key and is specific to an import resource type.</p>
	<p>If needed you can specify a skip predicate, which allows you skip the import of
	operations which meet the conditions of the predicate.</p>
*/
export interface ImportSink {
  /**
  	<p>The unique key of the import sink.</p>
  */
  readonly key: string;
  /**
  	<p>The type of import resource sent to this import sink.
  	You can only send one resource type per import sink.</p>
  */
  readonly resourceType: ImportResourceType;
  /**
  	<p>The version of this resource.</p>
  */
  readonly version: number;
  /**
  	<p>When the import sink was created.</p>
  */
  readonly createdAt: string;
  /**
  	<p>When the import sink was modified.</p>
  */
  readonly lastModifiedAt: string
}
/**
	<p>The representation sent to the server when creating or updating an import sink.</p>
*/
export interface ImportSinkDraft {
  /**
  	<p>The version of this resource.</p>
  */
  readonly version?: number;
  /**
  	<p>The unique key of the import sink.</p>
  */
  readonly key: string;
  /**
  	<p>The type of import resource sent to this import sink.</p>
  */
  readonly resourceType: ImportResourceType
}
/**
	<p>This type represents a paged importsink result.</p>
*/
export interface ImportSinkPagedResponse {
  /**
  	<p>The maximum number of import operations returned for a page.</p>
  */
  readonly limit: number;
  /**
  	<p>The offset supplied by the client or the server default. It is the number of elements skipped.</p>
  */
  readonly offset: number;
  /**
  	<p>The actual number of results returned by this response.</p>
  */
  readonly count: number;
  /**
  	<p>The results for this paged response.</p>
  */
  readonly results: ImportSink[]
}