/**
 * Represents a callsite of where a step binding is being applied.
 */
export declare class Callsite {
    filename: string;
    lineNumber: number;
    /**
     * Initializes a new [[Callsite]].
     *
     * @param filename The filename of the callsite.
     * @param lineNumber The line number of the callsite.
     */
    constructor(filename: string, lineNumber: number);
    /**
     * Returns a string representation of the callsite.
     *
     * @returns A string representing the callsite formatted with the filename and line
     * number.
     */
    toString(): string;
    /**
     * Captures the current [[Callsite]] object.
     */
    static capture(): Callsite;
}
//# sourceMappingURL=our-callsite.d.ts.map