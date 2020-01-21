//Generated file, please do not change



/**
	<p>An import summary describes the states of import resources of a given import sink.</p>
	<p>It is used to track the overall progress of of import resources.</p>
*/
export interface ImportSummary {
  /**
  	<p>The states summary for this import summary.</p>
  */
  readonly states: OperationStates;
  /**
  	<p>The total number of import operations received for this import group.</p>
  */
  readonly total: number
}

export interface OperationStates {
  /**
  	<p>The number of import operations that are in the state <code>Accepted</code>.</p>
  */
  readonly Accepted: number;
  /**
  	<p>The number of import operations that are in the state <code>ValidationFailed</code>.</p>
  */
  readonly ValidationFailed: number;
  /**
  	<p>The number of import operations that are in the state <code>Unresolved</code>.</p>
  */
  readonly Unresolved: number;
  /**
  	<p>The number of import operations that are in the state <code>Resolved</code>.</p>
  */
  readonly Resolved: number;
  /**
  	<p>The number of import operations that are in the state <code>WaitForMasterVariant</code>.</p>
  */
  readonly WaitForMasterVariant: number;
  /**
  	<p>The number of import operations that are in the state <code>Imported</code>.</p>
  */
  readonly Imported: number;
  /**
  	<p>The number of import operations that are in the state <code>Deleted</code>.</p>
  */
  readonly Deleted: number;
  /**
  	<p>The number of import operations that are in the state <code>Rejected</code>.</p>
  */
  readonly Rejected: number;
  /**
  	<p>The number of import operations that are in the state <code>Skipped</code>.</p>
  */
  readonly Skipped: number;
  /**
  	<p>The number of import operations that are in the state <code>Expired</code>.</p>
  */
  readonly Expired: number
}