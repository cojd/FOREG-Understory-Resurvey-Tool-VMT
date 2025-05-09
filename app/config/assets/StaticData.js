const Constants = {
  PlotTypes: {
    'REFERENCE_STAND': 'REFERENCE_STAND',
    'FIXED_RADIUS_PLOT': 'FIXED_RADIUS_PLOT',
  },
  LocalStorageKeys: {
    'SELECTION_PARAMS': 'SELECTION_PARAMS',
    'TREE_QUERY_RESULTS': 'TREE_QUERY_RESULTS',
  },
}
Object.freeze(Constants);

const DataLists = {
  SpeciesList: {
    'ABAM': 'Abies alba (ABAM)',
    'ABGR': 'Abies grandis (ABGR)',
    'ABPR': 'Abies procera (ABPR)',
    'ACCI': 'Acer circinatum (ACCI)',
    'ACMA': 'Acer macrophyllum  (ACMA)',
    'ALRU2': 'Alnus rubra (ALRU2)',
    'ALRH2': 'Alnus rhombifolia (ALRH2)',
    'AMAL': 'Amelanchier alnifolia (AMAL)',
    'ARME': 'Arbutus menziesii (ARME)',
    'BENE': 'Berberis nervosa (BENE)',
    'CACH': 'Chrysolepis chrysopylla (CACH)',
    'CADE27': 'Calocedrus decurrens (CADE27)',
    'CEIN': 'Ceanothus integerrimus (CEIN)',
    'CESA': 'Ceanothus sanguineus (CESA)',
    'CEVE': 'Ceanothus velutinus (CEVE)',
    'CHCH7': 'Castanopsis chrysophylla (CHCH7)',
    'CHUM': 'Chimophila umbellata (CHUM)',
    'CHME': 'Chimophila menziesii (CHME)',
    'COCOC': 'Corylus cornuta var. californica (COCOC)',
    'CONU': 'Cornus nuttallii (CONU)',
    'FRPU': 'Frangula purshiana (FRPU)',
    'GASH': 'Gaultheria shallon (GASH)',
    'ORSE': 'Orthilia secunda (ORSE)',
    'HODI': 'Holodiscus discolor (HODI)',
    'PAMY': 'Paxistima myrinites (PAMY)',
    'PSME': 'Pseudotsuga menziesii (PSME)',
    'PILA': 'Pinus lambertiana (PILA)',
    'QUGA4': 'Quercus garryana (QUGA4)',
    'RIAC': 'Ribes acerifolium (RIAC)',
    'RIBR': 'Ribes bracteosum (RIBR)',
    'ROGY': 'Rosa gymnocarpa (ROGY)',
    'RHMA': 'Rhododendron macrophyllum (RHMA)',
    'SARA': 'Sambucus racemosa (SARA)',
    'SOSC': 'Sorbus scopulina (SOSC)',
    'SYAL': 'Symphoricarpos albus (SYAL)',
    'SYMO': 'Symphoricarpos mollis (SYMO)',
    'TABR': 'Taxus brevifolia (TABR)',
    'THPL': 'Thuja plicata (THPL)',
    'TODI': 'Toxicodendron diversilobum (TODI)',
    'TSHE': 'Tsuga heterophylla (TSHE)',
    'TSME': 'Tsuga mertensiana (TSME)',
    'VAME': 'Vaccinium mambranaceum (VAME)',
    'VAOV': 'Vaccinium ovalifolium (VAOV)',
    'VAPA': 'Vaccinium parvifolium (VAPA)',
    'UNK': 'Unknown - See Comments',
  },
  StatusList: {
    1: '1 - Alive',
    2: '2 - New',
    6: '6 - Dead',
    7: '7 - Tag Present, No Seedling',
    8: '8 - Dead, Crushed by Debris',
    9: '9 - Tag Missing, No Seedling',
  },
  QualityList: {
    'S': 'Species',
    'G': 'Genus',
    'M': 'Morphospecies',
    'U': 'Unknown',
    },
  HerbSpeciesList: {
    'ACRU2': 'Actea rubra (ACRU2)',
    'ACTR': 'Achlys triphylla (ACTR)',
    'ADAL': 'Adiantum aleuticum (ADAL)',
    'ADBI': 'Adenocaulon bicolor (ADBI)',
    'AGCA5' : 'Agrostis capillaris (AGCA5)',
    'ALVI2': 'Allotropa virgata (MYCO-ALVI2)',
    'ANDE3': 'Anemone deltoidea (ANDE3)',
    'ANEMONE': 'Unknown, Anemone genus (ANEMONE)',
    'ANLY': 'Anemone lyallii (ANLY)',
    'ANOR': 'Anemone oregana (ANOR)',
    'ARCA2': 'Aralia californica (ARCA2)',
    'ARCO9': 'Arnica cordifolia (ARCO9)',
    'ASCA2': 'Asarum caudatum (ASCA2)',
    'ASTERACEAE' : 'Unknown aster (ASTERACEAE)',
    'ATFI': 'Athyrium filix-femina (ATFI)',
    'ATSE': 'Atrichum selwynii (MOSS-ATSE)',
    'BRSY': 'Brachypodium sylvaticum (BRSY)',
    'CABU': 'Calypso bulbosa (CABU)',
    'CALAMAGROSTIS': 'Unknown, genus Calamagrostis (CALAMAGROSTIS)',
    'CASC7': 'Campanula scouleri (CASC7)',
    'CEAU': 'Cephalanthera austiniae (MYCO-CEAU)',
    'CEPU12' : 'Ceratadon purpureus (MOSS-CEPU12)',
    'CHAN9' : 'Chamaenerion angustifolium (CHAN9)',
    'CIAL': 'Circaea alpina (CIAL)',
    'CIAR' : 'Cirsium arvense (CIAR)',
    'CLPE' : 'Claytonia perfoliata (CLPE)',
    'CLSI2': 'Claytonia sibirica (CLSI2)',
    'CLUN2': 'Clintonia uniflora (CLUN2)',
    'COGR2' : 'Collinsia grandiflora (COGR2)',
    'COLA3': 'Coptis laciniata (COLA3)',
    'COMA25': 'Corallorhiza maculata (MYCO-COMA25)',
    'COME17': 'Corallorhiza mertensiana (MYCO-COME17)',
    'COST19': 'Corallorhiza striata (MYCO-COST19)',
    'COHE2' : 'Collomia heterophylla (COHE2)',
    'COUN': 'Cornus unalaschkensis (COUN)',
    'CRIN8' : 'Cryptantha intermedia (CRIN8)',
    'CYFR2': 'Cystopteris fragilis (CYFR2)',
    'CYMO2': 'Cypridium montanum (CYMO2)',
    'CYSC4' : 'Cytisus scoparius (CYSC4)',
    'DIHO5': 'Dicranium howellii (MOSS-DIHO5)',
    'DIFO': 'Dicentra formosa (DIFO)',
    'EPCIW': 'Epilobium ciliatum ssp. watsonii (EPCIW)',
    'EPMI' : 'Epilobium minutum (EPMI)',
    'EQUISETUM': 'Unknown equisetum (EQUISETUM)',
    'FOCOC2' : 'Fallopia convolvulus (FOCOC2)',
    'FRVI': 'Fragaria virginiana (FRVI)',
    'FRVE': 'Fragaria vesca (FRVE)',
    'GATR3': 'Galium triflorum (GATR3)',
    'GAAP2': 'Galium aparine (GAAP2)',
    'GALLIUM': 'Unknown, gallium genus (GALLIUM)',
    'GAOR': 'Galium oreganum (GAOR)',
    'GOOB2': 'Goodyera oblongifolia (GOOB2)',
    'GYDR': 'Gymnocarpium dryopteris (GYDR)',
    'HECO6': 'Hemitomes congestum (MYCO-HECO6)',
    'HIAL2': 'Hieracium albiflorum (HIAL2)',
    'HOME3': 'Homalothecium megaptilum (MOSS-HOME3)',
    'HYRA3': 'Hypochaeris radicata (HYRA3)',
    'HYSP70': 'Hylocomium splendens (MOSS-HYSP70)',
    'ISMY2': 'Isothecium myosuroides (MOSS-ISMY2)',
    'ISST': 'Isothecium stoloniferum (MOSS-ISST)',
    'KIOR': 'Kindbergia oregana (MOSS-KIOR)',
    'LABI': 'Lactuca biennis (LABI)',
    'LAMU': 'Lactuca muralis (LAMU)',
    'LASE': 'Lactuca serriola (LASE)',
    'LANE3' : 'Lathyrus nevadensis (LANE3)',
    'LEAC8': 'Leucolepis acanthoneura (MOSS-LEAC8)',
    'LIBO': 'Linnea borealis (LIBO)',
    'LINMON': 'LINMON',
    'LOMI' : 'Lotus micranthus (LOMI)',
    'LYLA': 'Lysimachia latifolia (LYLA)',
    'MAGR3': 'Madia gracilis (MAGR3)',
    'MAIANTHEMUM': 'Unknown maianthemum (MAIANTHEMUM)',
    'MARA7': 'Maianthemum racemosum (MARA7)',
    'MAST4': 'Maianthemum stellatum (MAST4)',
    'MIBO' : 'Microseris borealis (MIBO)',
    'MOBI' : 'MOBI (unknown code found in burned plot 648)',
    'MOMA3': 'Moehringia macrophylla (MOMA3)',
    'MOUN2': 'Moneses uniflora (MOUN2)',
    'MOUN3': 'Monotropa uniflora (MYCO-MOUN3)',
    'MOHY3': 'Monotropa hypopitys (MYCO-MOHY3)',
    'MYMU': 'Mycelis muralis (MYMU)',
    'NEBA2': 'Neottia banksiana (NEBA2)',
    'NECO12': 'Neottia cordata (NECO12)',
    'NEPE': 'Nemophila pedunculata (NEPE)',
    'NEMOPHILA': 'Unknown, Nemophila genus (NEMOPHILA)',
    'OSBE': 'Osmorhiza berteroi (OSBE)',
    'OSDE': 'Osmorhiza depauperata (OSDE)',
    'OTHERMOSS': 'Other moss (OTHERMOSS)',
    'OXOR': 'Oxalis oregana (OXOR)',
    'OXSU': 'Oxalis suksdorfii (OXSU)',
    'PEFR5': 'Petasites frigidus (PEFR5)',
    'PERA': 'Pedicularis racemosa (PERA)',
    'PLIN11': 'Plagiomnium insigne (MOSS-PLIN11)',
    'PLSC70': 'Pleurozium schreberi (MOSS-PLSC70)',
    'POACEAE': 'Unknown Grass (POACEAE)',
    'PODO4': 'Polygonum douglasii (PODO4)',
    'POJU': 'Polytrichum juniperinum (MOSS-POJU)',
    'POLO4': 'Polystichum lonchitis (POLO4)',
    'POMU': 'Polystichum munitum (POMU)',
    'PRHO2': 'Prosartes hookeri (PRHO2)',
    'PSMI' : 'Psuedognaphalium microcephalum (PSMI)',
    'PTAN2': 'Pterospora andromedea (MYCO-PTAN2)',
    'PTAQ': 'Pteridium aquilinum (PTAQ)',
    'PYAS': 'Pyrola arifolia (PYAS)',
    'PYPI': 'Pyrola picta (PYPI)',
    'RHGL': 'Rhizomnium glabrescens (MOSS-RHGL)',
    'RHLO70': 'Rhytidiadelphus loreus (MOSS-RHLO70)',
    'RHTR70': 'Rhytidiadelphus triquestrus (MOSS-RHTR70)',
    'RHRO7': 'Rhytidiopsis robusta (MOSS-RHRO7)',
    'RULE': 'Rubus leucodermis (RULE)',
    'RULA': 'Rubus lasiococcus (RULA)',
    'RUNI': 'Rubus nivalis (RUNI)',
    'RUOC2': 'Rudbeckia occidentalis (RUOC2)',
    'RUPA': 'Rubus parviflorus (RUPA)',
    'RUUR': 'Rubus ursinus (RUUR)',
    'SESY' : 'Senecio sylvaticus',
    'SETR': 'Senecio triangularis (SETR)',
    'SONCHUS' : 'Unknown, Sonchus genus (SONCHUS)',
    'STRI': 'Stachys rigida (STRI)',
    'STCHC3': 'Stachys chamissonis var. cooleyae (STCHC3)',
    'STLA16': 'Streptopus lanceolatus (STLA16)',
    'STAM2': 'Streptopus amplexifolius (STAM2)',
    'STSP9': 'Struthiopteris spicant (STSP9)',
    'SYRE': 'Synthyris reneformis (SYRE)',
    'TAOF' : 'Taraxacum officinale (TAOF)',
    'THOC': 'Thalictrum occidentale (THOC)',
    'TITR': 'Tiarella trifoliata var. unifoliata (TITR)',
    'TROV2': 'Trillium ovatum (TROV2)',
    'VIAM' : 'Vicia americana (VIAM)',
    'VAHE': 'Vancouveria hexandra (VAHE)',
    'VEAM2' : 'Veronica americana (VEAM2)',
    'VESE' : 'Veronica serpyllifolia (VESE)',
    'VISE3': 'Viola sempervirens (VISE3)',
    'VIGL': 'Viola glabella (VIGL)',
    'VIOR': 'Viola orbiculata (VIOR)',
    'WHMO': 'Whipplea modesta (WHMO)',
    'XETE': 'Xerophyllum tenax (XETE)',
    'VESE': 'Veronica serpyllifolia (VESE)',
    'UNK': 'Unknown, see comments',

  },

CommentList: {
   'B' : 'Seedling on or near plot border',
   'TS' : 'Seedling too small to tag',
   'TAGUPD' : 'Seedling tag updated',
   'STATUPD' : 'Seedling status updated',
   'MULTI' : 'Multi-stemmed',
   'UWD' : 'Under woody debris',
   'BDS' : 'Broken during survey',
   'ODD' : 'On deaths door',
   'BURIED' : 'Buried',
   'C' : 'Cotyledons present',
   'LEADER_DIEBACK': 'Leader dieback',
   'LD': '50% of leaf area diseased',
   'LH': 'Herbivory on 50% of leaf area',
   'L': 'Seedling stem leaning',
   'PHOTO': 'Seedling was photographed',
   'PM': 'Seedling potentially multi-stemmed',
   'NURSE': 'On nurse',
   'R' : 'Seedling dead, resprout present',
   'STRESS': 'Stressed',
  },

}
Object.freeze(DataLists);
