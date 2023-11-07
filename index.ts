const enum ERatingFilm {
    VeryLow = 'Very low' ,
    Low = 'Low' ,
    Average = 'Average' ,
    High = 'High' ,
    Maximum = 'Maximum'
}
const enum EFilmAward {
    AACTAA = 'AACTA Awards' ,
    AFA = 'Austrian Film Award' ,
    SCA ='Silver Condor Award' ,
    MA ='Magritte Awards' ,
    BAoFaTA = 'British Academy of Film and Television Arts' ,
    KA = 'Kite Awards' ,
    GFA = 'German Film Award' ,
    BA = 'Bodil Awards' ,
    OA = 'Ophir Award' ,
    NFA = 'National Film Awards' ,
    GA = 'Goya Awards' ,
    GL = 'Golden Lion' ,
    GAw = 'Genie Awards' ,
    GHFFaW = 'Golden Horse Film Festival and Awards' ,
    AA = 'Ariel Awards' ,
    AAw = 'Amanda Award' ,
    PFA = 'Polish Film Award' ,
    O = 'Oscar' ,
    TAGOFF = 'The Antalya Golden Orange Film Festival' ,
    JA = 'Jussi Awards' ,
    Pd = 'Palme d\'Or' ,
    CLA = 'Czech Lion Awards' ,
    GAwa = 'Guldbagge Awards' ,
    GBA = 'Grand Bell Awards' ,
    JAFP = 'Japan Academy Film Prize'
}
const enum EFilmGenres {
    AsiaExtreme = 'Asia Extreme' ,
    LiveActionAnimatedFilm = 'Live-action animated film' ,
    BiographicalFilm = 'Biographical film' ,
    ActionFilm = 'Action film' ,
    MartialArtsFilm = 'Martial arts film' ,
    Western = 'Western' ,
    HorrorWestern = 'Horror Western' ,
    WarFilm = 'War film'  ,
    MountainFilm = 'Mountain film' ,
    GothicFilm = 'Gothic film' ,
    ChildrensFilm  ='Children\'s film' ,
    Jidaigeki = 'Jidaigeki' ,
    AnimatedDocumentary = 'Animated documentary' ,
    Drama = 'Drama' ,
    BehindTheScenes = 'Behind-the-scenes' ,
    ZombieComedy = 'Zombie comedy' ,
    Ostern = 'Ostern' ,
    HistoricalDrama = 'Historical drama' ,
    ComingOfAgeStory = 'Coming-of-age story' ,
    CommediaSexyAllitaliana = 'Commedia sexy all\'italiana' ,
    DisasterFilm = 'Disaster film' ,
    TelefoniBianchi = 'Telefoni Bianchi' ,
    AnthologyFilm = 'Anthology film' ,
    ComedyFilm = 'Comedy film' ,
    ComedyDrama = 'Comedy drama' ,
    ActionComedy = 'Action comedy' ,
    ComedyThriller = 'Comedy thriller' ,
    CommediaAllitaliana = 'Commedia all\'italiana' ,
    ComedyOfIntrigue = 'Comedy of intrigue' ,
    ComedyHorror = 'Comedy horror' ,
    ConcertFilm = 'Concert film' ,
    CrimeFilm = 'Crime film' ,
    MasalaFilm = 'Masala film' ,
    Melodrama = 'Melodrama' ,
    Metacinema = 'Metacinema' ,
    SupernaturalFilm = 'Supernatural film' ,
    Mockumentary = 'Mockumentary' ,
    MusicalFilm = 'Musical film' ,
    FoundFootage = 'Found footage' ,
    ScienceFictionFilm = 'Science fiction film' ,
    IndependentFilm = 'Independent film' ,
    FilmNoir = 'Film noir' ,
    SwordAndSandal = 'Sword-and-sandal' ,
    TeenFilm = 'Teen film' ,
    PoliticalThriller = 'Political thriller' ,
    PornographicFilm = 'Pornographic film' ,
    AdventureFilm = 'Adventure film' ,
    PropagandaFilm = 'Propaganda film' ,
    PseudoDocumentary = 'Pseudo-documentary' ,
    PsychologicalThriller = 'Psychological thriller' ,
    HoodFilm = 'Hood film' ,
    RomanceFilm = 'Romance film' ,
    SexInFilm = 'Sex in film' ,
    FamilyFilm = 'Family film' ,
    Screenlife = 'Screenlife' ,
    SportsFilm = 'Sports film' ,
    SuperheroFilm = 'Superhero film' ,
    MysteryFilm = 'Mystery film' ,
    DanceFilm = 'Dance film' ,
    Thriller = 'Thriller' ,
    PrisonFilm = 'Prison film' ,
    SamuraiCinema = 'Samurai cinema' ,
    UkrainianPoeticCinema = 'Ukrainian poetic cinema' ,
    Farce = 'Farce' ,
    BMovie = 'B movie' ,
    ZMovie = 'Z movie' ,
    VigilanteFilm = 'Vigilante film' ,
    BuddyCop = 'Buddy cop' ,
    ZombieFilm = 'Zombie film' ,
    SwashbucklerFilm = 'Swashbuckler film' ,
    HorrorFilm = 'Horror film' ,
    SurvivalFilm ='Survival film' ,
    FantasyFilm = 'Fantasy film' ,
    BlackFilm ='Black film' ,
    BlackComedy = 'Black comedy' ,
    ChickFlick = 'Chick flick' ,
    SpyFilm = 'Spy film' ,
    ExperimentalFilm = 'Experimental film' ,
    ExploitationFilm = 'Exploitation film' ,
    EpicFilm = 'Epic film' ,
    LegalThriller = 'Legal thriller' ,
    YakuzaFilm = 'Yakuza film'
}
const enum EStatusFilter {
    Match = 'Match filter' ,
    Range = 'Range filter' ,
    Values = 'Values filter'
}

type SearchTyType = Date | ERatingFilm | EFilmAward | EFilmGenres ;

interface IFilm<R extends ERatingFilm = ERatingFilm , A extends Array<EFilmAward> = Array<EFilmAward>> {
    name : string ,
    yearOfIssue : Date ,
    rating : R ,
    listOfAwards : A
}
let a : Array<EFilmAward> = [EFilmAward.AACTAA  ]
type FactoryOverload<T> =
    T extends Extract<SearchTyType , Date> ? {
        (filter : T) : Array<IFilm> ,
        (statusFilter : EStatusFilter.Range , filter : T , filterTo :  T) : Array<IFilm> ,
        (statusFilter : EStatusFilter.Values ,...values : Array<T>) : Array<IFilm>
    }
    : T extends Extract<SearchTyType , ERatingFilm> ? {
        (filter : T) : Array<IFilm<T>> ,
        (statusFilter : EStatusFilter.Range , filter : T , filterTo :  T) : Array<IFilm<T>> ,
        (statusFilter : EStatusFilter.Values ,...values : Array<T>) : Array<IFilm<T>>
    }
    : T extends Extract<SearchTyType , EFilmAward> ? {
        (statusFilter : EStatusFilter.Match , filter : T) : Array<IFilm<ERatingFilm , Array<T>>> ,
        (statusFilter  :  EStatusFilter.Values , ...values : Array<T>) : Array<IFilm<ERatingFilm , Array<T>>>
    }
    : T extends Extract<SearchTyType , EFilmGenres> ? {
        (statusFilter : EStatusFilter.Match , filter : T) : Array<ICategory<EFilmGenres>> ,
        (statusFilter  :  EStatusFilter.Values , ...values : Array<T>) : Array<ICategory<EFilmGenres>>
    }
    : never

class Film<R extends ERatingFilm = ERatingFilm , A extends Array<EFilmAward> = Array<EFilmAward>> implements IFilm<R , A> {
    private _name : string
    private _yearOfIssue : Date

    get name () : string {
        return this._name
    }
    get yearOfIssue () : Date {
        return this._yearOfIssue
    }

    constructor (
        name : string ,
        yearOfIssue : Date ,
        public rating : R , 
        public listOfAwards : A
    ) {
        this._name = name
        this._yearOfIssue = yearOfIssue
    }
}

interface IFilms {
    listOfFilms : Array<IFilm>

    searchByName (name : string) : IFilm

    filteringByYear : FactoryOverload<Date>
    filteringByRating : FactoryOverload<ERatingFilm>
    filteringByAwards : FactoryOverload<EFilmAward>
}

class Films implements IFilms {
    private statusFilter !: Exclude<SearchTyType , SearchTyType> 
    listOfFilms : Array<IFilm> = []
        

    searchByName (name : string) {
        return new Film ('name' , new Date , ERatingFilm.High , [EFilmAward.AACTAA , EFilmAward.BA])
    }

    filteringByYear (statusFilter : EStatusFilter | Date, filter ?: Date , filterTo ?: Date , ...values : Array<Date>) {
        return []
    }
    filteringByRating (statusFilter : EStatusFilter | ERatingFilm , filter ?: ERatingFilm , filterTo ?: ERatingFilm , ...values : Array<ERatingFilm>) {
        return []
    }
    filteringByAwards (statusFilter : Exclude <EStatusFilter , EStatusFilter.Range> | EFilmAward, filter : EFilmAward , ...values : Array<EFilmAward>) {
        return []
    }

    applyFiltersValue (currentFilter : Exclude<SearchTyType , SearchTyType>) : void {
        this.statusFilter = currentFilter
    }
}

interface ICategory<G extends EFilmGenres = EFilmGenres> {
    name : G ,
    listOfFilms : Array<IFilm> ,
}

class Category<G extends EFilmGenres = EFilmGenres> implements ICategory<G>{
    private _name : G

    listOfFilms : Array<IFilm> = []

    get name () : G {
        return this._name
    }
    
    constructor (
        name : G
    ) {
        this._name = name
    }
}

interface ICategories {
    listOfCategories : Array<ICategory>

    searchByName : FactoryOverload<EFilmGenres>
    applyFiltersValue : (currentFilter : EFilmGenres) => void 
}

class Categories implements ICategories {
    private statusFilter !: EFilmGenres 
    listOfCategories : Array<ICategory> = []

    searchByName (statusFilter : Exclude <EStatusFilter , EStatusFilter.Range> | EFilmGenres, filter : EFilmGenres , ...values : Array<EFilmGenres>) {
        return []
    }

    applyFiltersValue (currentFilter : EFilmGenres) : void {
        this.statusFilter = currentFilter
    }
}