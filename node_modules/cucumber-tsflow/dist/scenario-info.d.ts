import { TagName } from "./types";
/**
 * Provides information about a running Cucumber scenario.
 */
export declare class ScenarioInfo {
    scenarioTitle: string;
    tags: TagName[];
    /**
     * Initializes the [[ScenarioInfo]] object.
     *
     * @param scenarioTitle The string title of the currently running Cucumber scenario.
     * @param tags An array of [[TagName]] representing the tags that are in scope for the currently
     * running Cucumber scenario.
     */
    constructor(scenarioTitle: string, tags: TagName[]);
}
//# sourceMappingURL=scenario-info.d.ts.map