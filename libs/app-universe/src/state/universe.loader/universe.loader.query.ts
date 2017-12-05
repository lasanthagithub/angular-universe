export namespace UniverseConfigQuery {
    export const getConfig = (state: any) => state.universe.configuration;

    export const universeReady = (state: any) => getConfig(state) != null
}