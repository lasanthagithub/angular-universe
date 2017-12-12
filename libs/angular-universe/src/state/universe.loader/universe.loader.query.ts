import { UniverseConfig } from "./../../model/universe.config";

export namespace UniverseConfigQuery {
    export const getConfig = (state) => <UniverseConfig>state.configuration;

    export const universeReady = (state) => getConfig(state) != null
}