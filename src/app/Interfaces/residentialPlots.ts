export interface residentialPlots {
    ProjectId: string;
    ProjectName: string;
    Type: string;
    Category: string;
    tag1: string;
    HeaderLocation: string;
    DTCPApproved: boolean;
    RERAApproved: boolean;
    VerifiedByReydon: boolean;
    ProjectLaunchDate: string;
    PricePerSqFt: number;
    BannerImagesNames: string[];
    CardImage: string;
    YoutubeLink: string;
    BrouchureLink: string;
    TotalArea: number;
    TotalPlots: number;
    AvailablePlots: number;
    LayoutImage: string;
    PropertyDescription: string;
    NoOfPhases: number;
    AddressDetails: {
        Address: string,
        PostOffice: string,
        Taluk: string,
        PinCode: string,
        District: string,
        Landmark: string,
        Zone: string,
        Topography: string,
        GoogleMapLink: string,
        Latitude: number,
        Longitude: number
    };
    Amenities:string[];
    CardAmenities:string[];
    NearByProximity:{
        ProximityName:string;
        Distance:string;
        Duration:string;
        Latitude:number;
        Longitude:number;
        Category:string;
    }[];
    TopFiveReasons:{
        ReasonNo:string;
        Title:string;
        Description:string;
        ImageUrl:string;
    }[];
    LegalAndFinancial:{
        DTCPApprovalNo:string;
        RERAApprovalNo:string;
        TitdleDeedisClearDocument:boolean;
        LitigationProperty:boolean;
        EncumberanceCertificateisClear:boolean;
        PropertyisUnderHypothecationbyBank:boolean;
    };
    BankPartners:string[];
    plots:{
        plotNo:number;
        facing:string;
        sizeSqFt:number;
        sizeCent:number;
    }[];
}