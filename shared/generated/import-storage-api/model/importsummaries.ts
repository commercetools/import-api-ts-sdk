//Generated file, please do not change



/**
*	An import summary describes the states of import resources of a given import sink.
*	
*	It is used to track the overall progress of of import resources.
*	
*/
export interface ImportSummary {
  /**
  *	The states summary for this import summary.
  */
  readonly states: OperationStates;
  /**
  *	The total number of import operations received for this import group.
  */
  readonly total: number
}
export interface OperationStates {
  /**
  *	The number of import operations that are in the state `Accepted`.
  */
  readonly Accepted: number;
  /**
  *	The number of import operations that are in the state `ValidationFailed`.
  */
  readonly ValidationFailed: number;
  /**
  *	The number of import operations that are in the state `Unresolved`.
  */
  readonly Unresolved: number;
  /**
  *	The number of import operations that are in the state `Resolved`.
  */
  readonly Resolved: number;
  /**
  *	The number of import operations that are in the state `WaitForMasterVariant`.
  */
  readonly WaitForMasterVariant: number;
  /**
  *	The number of import operations that are in the state `Imported`.
  */
  readonly Imported: number;
  /**
  *	The number of import operations that are in the state `Deleted`.
  */
  readonly Deleted: number;
  /**
  *	The number of import operations that are in the state `Rejected`.
  */
  readonly Rejected: number;
  /**
  *	The number of import operations that are in the state `Skipped`.
  */
  readonly Skipped: number;
  /**
  *	The number of import operations that are in the state `Expired`.
  */
  readonly Expired: number
}