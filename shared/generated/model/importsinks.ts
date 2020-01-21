//Generated file, please do not change

import { ImportResourceType } from './common'

/**
	<p>This type represents an import sink.</p>
*/
export interface ImportSink {
  /**
  	<p>The key of import sink.</p>
  */
  readonly key: string;
  /**
  	<p>The type of the import resource sent to this import sink.</p>
  */
  readonly resourceType: ImportResourceType;
  /**
  	<p>The version of this resource.</p>
  */
  readonly version: number;
  /**
  	<p>A conditional expression which skips the import of operations for which the expression evaluates to ´true´.</p>
  */
  readonly skipPredicate?: Predicate;
  /**
  	<p>The creation time of this import sink.</p>
  */
  readonly createdAt: string;
  /**
  	<p>The last modification time of this import sink.</p>
  */
  readonly lastModifiedAt: string
}
/**
	<p>This type represents the read model of an ImportSink.</p>
*/
export interface ImportSinkDraft {
  /**
  	<p>The version of this resource.</p>
  */
  readonly version?: number;
  /**
  	<p>The key of import sink.</p>
  */
  readonly key: string;
  /**
  	<p>The type of the import resource sent to this import sink.</p>
  */
  readonly resourceType: ImportResourceType;
  /**
  	<p>A conditional expression which skips the import of operations for which the expression evaluates to ´true´.</p>
  */
  readonly skipPredicate?: Predicate
}
/**
	<p>A predicate allows to check the current state of a CTP resource. And can be used to detect if an import should
	be performed or should be skipped. And this abstract type allows us to support different syntaxes for our predicates
	without any breaking changes to our api.</p>
*/
export type Predicate =
  JavascriptPredicate
;
/**
	<p>A Javascript predicate uses a javascript boolean expression. For now we should just support any javascript
	expression that evaluates to a truthy value. Later we have to add a strict validation of the expression to
	prevent malicious javascript.</p>
*/
export interface JavascriptPredicate {
  readonly type: "javascript";
  /**
  	<p>A javscript boolean expression.</p>
  */
  readonly expression: string
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