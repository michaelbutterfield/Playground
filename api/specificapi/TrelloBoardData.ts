declare module TrelloBoardData
{

    export interface Term
    {
        text: string;
    }

    export interface Options
    {
        terms: Term[];
        modifiers: any[];
        modelTypes: string[];
        partial: boolean;
    }

    export interface Board
    {
        id: string;
        name: string;
        idOrganization?: any;
    }

    export interface BoardRootObject
    {
        options: Options;
        boards: Board[];
        cards: any[];
        organizations: any[];
        members: any[];
    }

}
