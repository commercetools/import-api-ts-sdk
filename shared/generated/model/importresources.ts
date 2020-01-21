//Generated file, please do not change

import { ImportResourceType, ReferenceType } from './common'

/**
	<p>A reference that an unresolved resource might be waiting for</p>
*/
export interface UnresolvedReference {
  /**
  	<p>An artificial id for the unresolved reference, to accomodate our database model</p>
  */
  readonly id: string;
  /**
  	<p>The expected reference key</p>
  */
  readonly referenceKey: string;
  /**
  	<p>The expected reference type</p>
  */
  readonly referenceType: ReferenceType;
  /**
  	<p>The key of the import sink</p>
  */
  readonly importSinkKey: string;
  /**
  	<p>The operation identifier from which the orginal resource resulted</p>
  */
  readonly operationId: string
}
/**
	<p>This type represents a resource with on or more unresolved references.</p>
*/
export interface ResourceReference {
  /**
  	<p>the project to which this resource belongs.</p>
  */
  readonly projectKey: string;
  /**
  	<p>The key of the imported resource.</p>
  */
  readonly resourceKey: string;
  /**
  	<p>The type of the imported resource.</p>
  */
  readonly resourceType: ImportResourceType
}
/**
	<p>This type represents a resource with on or more unresolved references.</p>
*/
export interface UnresolvedImportResource {
  /**
  	<p>The key of the imported resource.</p>
  */
  readonly resourceKey: string;
  /**
  	<p>The type of the imported resource.</p>
  */
  readonly resourceType: ImportResourceType;
  /**
  	<p>the resource which could not successfull imported</p>
  */
  readonly resourceAsString: string;
  /**
  	<p>The key of the import sink</p>
  */
  readonly importSinkKey: string;
  /**
  	<p>the identifier of the operaton that is to be commited</p>
  */
  readonly operationId: string;
  /**
  	<p>The creation time of this import operation.</p>
  */
  readonly createdAt: string
}
/**
	<p>This type represents a paged unresolved import resource result.</p>
*/
export interface UnresolvedImportResourcePagedResponse {
  /**
  	<p>The maximun amount of import operations.</p>
  */
  readonly limit: number;
  /**
  	<p>The offset supplied by the client or the server default. It is the number of elements skipped.</p>
  */
  readonly offset: number;
  /**
  	<p>The actual number of results returned in results.</p>
  */
  readonly count: number;
  /**
  	<p>An Array of results.</p>
  */
  readonly results: UnresolvedImportResource[]
}