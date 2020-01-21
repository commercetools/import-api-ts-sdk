//Generated file, please do not change

import { ImportResourceType } from './common'

/**
*	This type represents an import sink.
*/
export interface ImportSink {
  /**
  *	The key of import sink.
  */
  readonly key: string;
  /**
  *	The type of the import resource sent to this import sink.
  */
  readonly resourceType: ImportResourceType;
  /**
  *	The version of this resource.
  */
  readonly version: number;
  /**
  *	A conditional expression which skips the import of operations for which the expression evaluates to ´true´.
  *	
  */
  readonly skipPredicate?: Predicate;
  /**
  *	The creation time of this import sink.
  */
  readonly createdAt: string;
  /**
  *	The last modification time of this import sink.
  */
  readonly lastModifiedAt: string
}
/**
*	This type represents the read model of an ImportSink.
*/
export interface ImportSinkDraft {
  /**
  *	The version of this resource.
  */
  readonly version?: number;
  /**
  *	The key of import sink.
  */
  readonly key: string;
  /**
  *	The type of the import resource sent to this import sink.
  */
  readonly resourceType: ImportResourceType;
  /**
  *	A conditional expression which skips the import of operations for which the expression evaluates to ´true´.
  *	
  */
  readonly skipPredicate?: Predicate
}
/**
*	A predicate allows to check the current state of a CTP resource. And can be used to detect if an import should
*	be performed or should be skipped. And this abstract type allows us to support different syntaxes for our predicates
*	without any breaking changes to our api.
*	
*/
export type Predicate =
  JavascriptPredicate
;
/**
*	A Javascript predicate uses a javascript boolean expression. For now we should just support any javascript
*	expression that evaluates to a truthy value. Later we have to add a strict validation of the expression to
*	prevent malicious javascript.
*	
*/
export interface JavascriptPredicate {
  readonly type: "javascript";
  /**
  *	A javscript boolean expression.
  *	
  */
  readonly expression: string
}
/**
*	This type represents a paged importsink result.
*/
export interface ImportSinkPagedResponse {
  /**
  *	The maximum number of import operations returned for a page.
  */
  readonly limit: number;
  /**
  *	The offset supplied by the client or the server default. It is the number of elements skipped.
  */
  readonly offset: number;
  /**
  *	The actual number of results returned by this response.
  */
  readonly count: number;
  /**
  *	The results for this paged response.
  */
  readonly results: ImportSink[]
}