//Generated file, please do not change

import { ImportResourceType, ReferenceType } from './common'

/**
*	A reference that an unresolved resource might be waiting for
*/
export interface UnresolvedReference {
  /**
  *	An artificial id for the unresolved reference, to accomodate our database model
  */
  readonly id: string;
  /**
  *	The expected reference key
  */
  readonly referenceKey: string;
  /**
  *	The expected reference type
  */
  readonly referenceType: ReferenceType;
  /**
  *	The key of the import sink
  */
  readonly importSinkKey: string;
  /**
  *	The operation identifier from which the orginal resource resulted
  */
  readonly operationId: string
}
/**
*	This type represents a resource with on or more unresolved references.
*/
export interface ResourceReference {
  /**
  *	the project to which this resource belongs.
  */
  readonly projectKey: string;
  /**
  *	The key of the imported resource.
  */
  readonly resourceKey: string;
  /**
  *	The type of the imported resource.
  */
  readonly resourceType: ImportResourceType
}
/**
*	This type represents a resource with on or more unresolved references.
*/
export interface UnresolvedImportResource {
  /**
  *	The key of the imported resource.
  */
  readonly resourceKey: string;
  /**
  *	The type of the imported resource.
  */
  readonly resourceType: ImportResourceType;
  /**
  *	the resource which could not successfull imported
  */
  readonly resourceAsString: string;
  /**
  *	The key of the import sink
  */
  readonly importSinkKey: string;
  /**
  *	the identifier of the operaton that is to be commited
  */
  readonly operationId: string;
  /**
  *	The creation time of this import operation.
  */
  readonly createdAt: string
}
/**
*	This type represents a paged unresolved import resource result.
*/
export interface UnresolvedImportResourcePagedResponse {
  /**
  *	The maximun amount of import operations.
  */
  readonly limit: number;
  /**
  *	The offset supplied by the client or the server default. It is the number of elements skipped.
  */
  readonly offset: number;
  /**
  *	The actual number of results returned in results.
  */
  readonly count: number;
  /**
  *	An Array of results.
  */
  readonly results: UnresolvedImportResource[]
}