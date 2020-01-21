//Generated file, please do not change

import { KeyReference, ProcessingState } from './common'
import { ErrorObject } from './errors'

/**
	<p>Tracks the status of a single import resource as it is imported into the commercetools project.</p>
*/
export interface ImportOperation {
  /**
  	<p>The import operation version.</p>
  */
  readonly version: number;
  /**
  	<p>The key of the import sink.</p>
  */
  readonly importSinkKey: string;
  /**
  	<p>The key of the import resource.</p>
  */
  readonly resourceKey: string;
  /**
  	<p>The identifier of the operaton that is to be commited</p>
  */
  readonly id: string;
  /**
  	<p>The status of the import resource.</p>
  */
  readonly state: ProcessingState;
  /**
  	<p>When the resource is successfully imported, this represents the imported resource version</p>
  */
  readonly resourceVersion?: number;
  /**
  	<p>The number of request retries for processing the import resource.</p>
  */
  readonly retryCount: number;
  /**
  	<p>If an import resource has unresolved references, the state is set to <code>Unresolved</code>
  	and this property contains the unresolved references.</p>
  */
  readonly unresolvedReferences?: KeyReference[];
  /**
  	<p>If an import resource does not import correctly, the state is set to <code>Rejected</code> or <code>ValidationFailed</code>
  	and this property contains the errors.</p>
  */
  readonly errors?: ErrorObject[];
  /**
  	<p>When the import operation was created.</p>
  */
  readonly createdAt: string;
  /**
  	<p>When the import operation was modified.</p>
  */
  readonly lastModifiedAt: string;
  /**
  	<p>When the import operation expires.</p>
  */
  readonly expiresAt?: string
}
/**
	<p>This type represents a paged import operation result.</p>
*/
export interface ImportOperationPagedResponse {
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
  readonly results: ImportOperation[]
}
/**
	<p>This enumeration describes the operation state of a newly created import operation.</p>
*/
export type ImportOperationState =
   'Accepted' |
   'ValidationFailed';
/**
	<p>The validation status of a created operation.</p>
*/
export interface ImportOperationStatus {
  /**
  	<p>Id of the import operation.</p>
  */
  readonly operationId?: string;
  /**
  	<p>Validation state of the import operation.</p>
  */
  readonly state: ImportOperationState;
  /**
  	<p>Validation errors for the import operation.</p>
  */
  readonly errors?: ErrorObject[]
}