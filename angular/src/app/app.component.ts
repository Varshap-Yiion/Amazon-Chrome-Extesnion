import {ApplicationRef, ChangeDetectorRef, Component, Inject, NgZone, ViewChild} from '@angular/core';
import {TAB_ID} from './tab-id.injector';
import {Angular5Csv} from "angular5-csv/dist/Angular5-csv";
import {AppService} from "./app.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable:variable-name
export class AppComponent {
  readonly tabId = this._tabId;
  message: string;
  title = 'app';
  asinList: any = [];
  productList: any = [];
  filteredProductList: any = [];
  finalProductList: any = [];
  productList1: any = [];
  from_page: number;
  to_page: number;
  minimum_stock: number = 20;
  minimum_price: number = 10;
  maximum_price: number = 20;
  sku_start_from: number = 1001;
  public brands: any;
  public products: any = 'Product';
  public product: any;
  country_list: any;
  countryData: any;
  country: any;
  public trademarklist: any = [];
  public cloudinventroylist: any = [];
  public criticalbrandlist: any;
  public trademarked_product: any;
  public trademarkedproduct: any;
  public cloud_inventory_product: any;
  public cloudinventoryproduct: any;
  public critical_branded_product: any;
  public criticalbrandedproduct: any;
  public discounted_product: any;
  public discountedproduct: any;
  public shipment_tax_product: any;
  public shipmenttaxproduct: any;
  public requiring_selection_product: any;
  public requiringselectionproduct: any;
  public amazon_prime_product: any;
  public amazonprimeproduct: any;
  public SBA_tag: any;
  public SBAtag: any;
  public min_stock: any;
  public mini_price: any;
  public maxi_price: any;
  public min_price: any;
  public max_price: any;
  public pro_margin: any;
  public ama_commision: any;
  public exch_difference: any;
  public profitmargin: any;
  public amazoncommision: any;
  public exchangedifference: any;
  public product_quantity: number;
  public product_price: number;
  public sku_code: any = 'AKS';
  public profit_margin: number = 25;
  public amazon_commision: number = 20;
  public exchange_difference: number = 1.35;
  public skucode: any;
  public result1: any = [];
  tabUrl: string;
  asinNumber: any = [];
  product_brand: any = [];
  tabs: any = [];
  overlaypopup: boolean = false;
  public brandlist: any = [];
  edittrademarkbox: boolean = false;
  editcloudinventorybox: boolean = false;
  editcriticalbrandbox: boolean = false;
  buttonName: any = 'Search and Download';


  public isoCountries = [
    {
      id: 1,
      code: "af",
      name: "Afghanistan"
    },
    {
      id: 2,
      code: "ax",
      name: "Aland Islands"
    },
    {
      id: 3,
      code: "al",
      name: "Albania"
    },
    {
      id: 4,
      code: "dz",
      name: "Algeria"
    },
    {
      id: 5,
      code: "as",
      name: "American Samoa"
    },
    {
      id: 6,
      code: "ad",
      name: "Andorra"
    },
    {
      id: 7,
      code: "ao",
      name: "Angola"
    },
    {
      id: 8,
      code: "ai",
      name: "Anguilla"
    },
    {
      id: 9,
      code: "aq",
      name: "Antarctica"
    },
    {
      id: 10,
      code: "ag",
      name: "Antigua and Barbuda"
    },
    {
      id: 11,
      code: "ar",
      name: "Argentina"
    },
    {
      id: 12,
      code: "am",
      name: "Armenia"
    },
    {
      id: 13,
      code: "aw",
      name: "Aruba"
    },
    {
      id: 14,
      code: "au",
      name: "Australia"
    },
    {
      id: 15,
      code: "at",
      name: "Austria"
    },
    {
      id: 16,
      code: "az",
      name: "Azerbaijan"
    },
    {
      id: 17,
      code: "bs",
      name: "Bahamas"
    },
    {
      id: 18,
      code: "bh",
      name: "Bahrain"
    },
    {
      id: 19,
      code: "bd",
      name: "Bangladesh"
    },
    {
      id: 20,
      code: "bb",
      name: "Barbados"
    },
    {
      id: 21,
      code: "by",
      name: "Belarus"
    },
    {
      id: 22,
      code: "be",
      name: "Belgium"
    },
    {
      id: 23,
      code: "bz",
      name: "Belize"
    },
    {
      id: 24,
      code: "bj",
      name: "Benin"
    },
    {
      id: 25,
      code: "bm",
      name: "Bermuda"
    },
    {
      id: 26,
      code: "bt",
      name: "Bhutan"
    },
    {
      id: 27,
      code: "bo",
      name: "Bolivia"
    },
    {
      id: 28,
      code: "ba",
      name: "Bosnia and Herzegovina"
    },
    {
      id: 29,
      code: "bw",
      name: "Botswana"
    },
    {
      id: 30,
      code: "bv",
      name: "Bouvet Island"
    },
    {
      id: 31,
      code: "br",
      name: "Brazil"
    },
    {
      id: 32,
      code: "io",
      name: "British Indian Ocean Territory"
    },
    {
      id: 33,
      code: "bn",
      name: "Brunei Darussalam"
    },
    {
      id: 34,
      code: "bg",
      name: "Bulgaria"
    },
    {
      id: 35,
      code: "bf",
      name: "Burkina Faso"
    },
    {
      id: 36,
      code: "bi",
      name: "Burundi"
    },
    {
      id: 37,
      code: "kh",
      name: "Cambodia"
    },
    {
      id: 38,
      code: "cm",
      name: "Cameroon"
    },
    {
      id: 39,
      code: "ca",
      name: "Canada"
    },
    {
      id: 40,
      code: "cv",
      name: "Cape Verde"
    },
    {
      id: 41,
      code: "ky",
      name: "Cayman Islands"
    },
    {
      id: 42,
      code: "cf",
      name: "Central African Republic"
    },
    {
      id: 43,
      code: "td",
      name: "Chad"
    },
    {
      id: 44,
      code: "cl",
      name: "Chile"
    },
    {
      id: 45,
      code: "cn",
      name: "China"
    },
    {
      id: 46,
      code: "cx",
      name: "Christmas Island"
    },
    {
      id: 47,
      code: "cc",
      name: "Cocos (Keeling) Islands"
    },
    {
      id: 48,
      code: "co",
      name: "Colombia"
    },
    {
      id: 49,
      code: "km",
      name: "Comoros"
    },
    {
      id: 50,
      code: "cg",
      name: "Congo"
    },
    {
      id: 51,
      code: "cd",
      name: "Congo, Democratic Republic"
    },
    {
      id: 52,
      code: "ck",
      name: "Cook Islands"
    },
    {
      id: 53,
      code: "cr",
      name: "Costa Rica"
    },
    {
      id: 54,
      code: "ci",
      name: "Cote D'Ivoire"
    },
    {
      id: 55,
      code: "hr",
      name: "Croatia"
    },
    {
      id: 56,
      code: "cu",
      name: "Cuba"
    },
    {
      id: 57,
      code: "cy",
      name: "Cyprus"
    },
    {
      id: 58,
      code: "cz",
      name: "Czech Republic"
    },
    {
      id: 59,
      code: "dk",
      name: "Denmark"
    },
    {
      id: 60,
      code: "dj",
      name: "Djibouti"
    },
    {
      id: 61,
      code: "dm",
      name: "Dominica"
    },
    {
      id: 62,
      code: "do",
      name: "Dominican Republic"
    },
    {
      id: 63,
      code: "ec",
      name: "Ecuador"
    },
    {
      id: 64,
      code: "eg",
      name: "Egypt"
    },
    {
      id: 65,
      code: "sv",
      name: "El Salvador"
    },
    {
      id: 66,
      code: "gq",
      name: "Equatorial Guinea"
    },
    {
      id: 67,
      code: "er",
      name: "Eritrea"
    },
    {
      id: 68,
      code: "ee",
      name: "Estonia"
    },
    {
      id: 69,
      code: "et",
      name: "Ethiopia"
    },
    {
      id: 70,
      code: "fk",
      name: "Falkland Islands (Malvinas)"
    },
    {
      id: 71,
      code: "fo",
      name: "Faroe Islands"
    },
    {
      id: 72,
      code: "fj",
      name: "Fiji"
    },
    {
      id: 73,
      code: "fi",
      name: "Finland"
    },
    {
      id: 74,
      code: "fr",
      name: "France"
    },
    {
      id: 75,
      code: "gf",
      name: "French Guiana"
    },
    {
      id: 76,
      code: "pf",
      name: "French Polynesia"
    },
    {
      id: 77,
      code: "tf",
      name: "French Southern Territories"
    },
    {
      id: 78,
      code: "ga",
      name: "Gabon"
    },
    {
      id: 79,
      code: "gm",
      name: "Gambia"
    },
    {
      id: 80,
      code: "ge",
      name: "Georgia"
    },
    {
      id: 81,
      code: "de",
      name: "Germany"
    },
    {
      id: 82,
      code: "gh",
      name: "Ghana"
    },
    {
      id: 83,
      code: "gi",
      name: "Gibraltar"
    },
    {
      id: 84,
      code: "gr",
      name: "Greece"
    },
    {
      id: 85,
      code: "gl",
      name: "Greenland"
    },
    {
      id: 86,
      code: "gd",
      name: "Grenada"
    },
    {
      id: 87,
      code: "gp",
      name: "Guadeloupe"
    },
    {
      id: 88,
      code: "gu",
      name: "Guam"
    },
    {
      id: 89,
      code: "gt",
      name: "Guatemala"
    },
    {
      id: 90,
      code: "gg",
      name: "Guernsey"
    },
    {
      id: 91,
      code: "gn",
      name: "Guinea"
    },
    {
      id: 92,
      code: "gw",
      name: "Guinea-Bissau"
    },
    {
      id: 93,
      code: "gy",
      name: "Guyana"
    },
    {
      id: 94,
      code: "ht",
      name: "Haiti"
    },
    {
      id: 95,
      code: "hm",
      name: "Heard and McDonald Islands"
    },
    {
      id: 96,
      code: "va",
      name: "Holy See"
    },
    {
      id: 97,
      code: "hn",
      name: "Honduras"
    },
    {
      id: 98,
      code: "hk",
      name: "Hong Kong"
    },
    {
      id: 99,
      code: "hu",
      name: "Hungary"
    },
    {
      id: 100,
      code: "is",
      name: "Iceland"
    },
    {
      id: 101,
      code: "in",
      name: "India"
    },
    {
      id: 102,
      code: "id",
      name: "Indonesia"
    },
    {
      id: 103,
      code: "ir",
      name: "Iran"
    },
    {
      id: 104,
      code: "iq",
      name: "Iraq"
    },
    {
      id: 105,
      code: "ie",
      name: "Ireland"
    },
    {
      id: 106,
      code: "im",
      name: "Isle Of Man"
    },
    {
      id: 107,
      code: "il",
      name: "Israel"
    },
    {
      id: 108,
      code: "it",
      name: "Italy"
    },
    {
      id: 109,
      code: "jm",
      name: "Jamaica"
    },
    {
      id: 110,
      code: "jp",
      name: "Japan"
    },
    {
      id: 111,
      code: "je",
      name: "Jersey"
    },
    {
      id: 112,
      code: "jo",
      name: "Jordan"
    },
    {
      id: 113,
      code: "kz",
      name: "Kazakhstan"
    },
    {
      id: 114,
      code: "ke",
      name: "Kenya"
    },
    {
      id: 115,
      code: "ki",
      name: "Kiribati"
    },
    {
      id: 116,
      code: "kr",
      name: "Korea"
    },
    {
      id: 117,
      code: "kw",
      name: "Kuwait"
    },
    {
      id: 118,
      code: "kg",
      name: "Kyrgyzstan"
    },
    {
      id: 119,
      code: "la",
      name: "Lao People's Democratic Republic"
    },
    {
      id: 120,
      code: "lv",
      name: "Latvia"
    },
    {
      id: 121,
      code: "lb",
      name: "Lebanon"
    },
    {
      id: 122,
      code: "ls",
      name: "Lesotho"
    },
    {
      id: 123,
      code: "lr",
      name: "Liberia"
    },
    {
      id: 124,
      code: "ly",
      name: "Libyan Arab Jamahiriya"
    },
    {
      id: 125,
      code: "li",
      name: "Liechtenstein"
    },
    {
      id: 126,
      code: "lt",
      name: "Lithuania"
    },
    {
      id: 127,
      code: "lu",
      name: "Luxembourg"
    },
    {
      id: 128,
      code: "mo",
      name: "Macao"
    },
    {
      id: 129,
      code: "mk",
      name: "Macedonia"
    },
    {
      id: 130,
      code: "mg",
      name: "Madagascar"
    },
    {
      id: 131,
      code: "mw",
      name: "Malawi"
    },
    {
      id: 132,
      code: "my",
      name: "Malaysia"
    },
    {
      id: 133,
      code: "mv",
      name: "Maldives"
    },
    {
      id: 134,
      code: "ml",
      name: "Mali"
    },
    {
      id: 135,
      code: "mt",
      name: "Malta"
    },
    {
      id: 136,
      code: "mh",
      name: "Marshall Islands"
    },
    {
      id: 137,
      code: "mq",
      name: "Martinique"
    },
    {
      id: 138,
      code: "mr",
      name: "Mauritania"
    },
    {
      id: 139,
      code: "mu",
      name: "Mauritius"
    },
    {
      id: 140,
      code: "yt",
      name: "Mayotte"
    },
    {
      id: 141,
      code: "mx",
      name: "Mexico"
    },
    {
      id: 142,
      code: "fm",
      name: "Micronesia"
    },
    {
      id: 143,
      code: "md",
      name: "Moldova"
    },
    {
      id: 144,
      code: "mc",
      name: "Monaco"
    },
    {
      id: 145,
      code: "mn",
      name: "Mongolia"
    },
    {
      id: 146,
      code: "me",
      name: "Montenegro"
    },
    {
      id: 147,
      code: "ms",
      name: "Montserrat"
    },
    {
      id: 148,
      code: "ma",
      name: "Morocco"
    },
    {
      id: 149,
      code: "mz",
      name: "Mozambique"
    },
    {
      id: 150,
      code: "mm",
      name: "Myanmar"
    },
    {
      id: 151,
      code: "na",
      name: "Namibia"
    },
    {
      id: 152,
      code: "nr",
      name: "Nauru"
    },
    {
      id: 153,
      code: "np",
      name: "Nepal"
    },
    {
      id: 154,
      code: "nl",
      name: "Netherlands"
    },
    {
      id: 155,
      code: "an",
      name: "Netherlands Antilles"
    },
    {
      id: 156,
      code: "nc",
      name: "New Caledonia"
    },
    {
      id: 157,
      code: "nz",
      name: "New Zealand"
    },
    {
      id: 158,
      code: "ni",
      name: "Nicaragua"
    },
    {
      id: 159,
      code: "ne",
      name: "Niger"
    },
    {
      id: 160,
      code: "ng",
      name: "Nigeria"
    },
    {
      id: 161,
      code: "nu",
      name: "Niue"
    },
    {
      id: 162,
      code: "nf",
      name: "Norfolk Island"
    },
    {
      id: 163,
      code: "mp",
      name: "Northern Mariana Islands"
    },
    {
      id: 164,
      code: "no",
      name: "Norway"
    },
    {
      id: 165,
      code: "om",
      name: "Oman"
    },
    {
      id: 166,
      code: "pk",
      name: "Pakistan"
    },
    {
      id: 167,
      code: "pw",
      name: "Palau"
    },
    {
      id: 168,
      code: "ps",
      name: "Palestinian Territory, Occupied"
    },
    {
      id: 169,
      code: "pa",
      name: "Panama"
    },
    {
      id: 170,
      code: "pg",
      name: "Papua New Guinea"
    },
    {
      id: 171,
      code: "py",
      name: "Paraguay"
    },
    {
      id: 172,
      code: "pe",
      name: "Peru"
    },
    {
      id: 173,
      code: "ph",
      name: "Philippines"
    },
    {
      id: 174,
      code: "pn",
      name: "Pitcairn"
    },
    {
      id: 175,
      code: "pl",
      name: "Poland"
    },
    {
      id: 176,
      code: "pt",
      name: "Portugal"
    },
    {
      id: 177,
      code: "pr",
      name: "Puerto Rico"
    },
    {
      id: 178,
      code: "qa",
      name: "Qatar"
    },
    {
      id: 179,
      code: "re",
      name: "Reunion"
    },
    {
      id: 180,
      code: "ro",
      name: "Romania"
    },
    {
      id: 181,
      code: "ru",
      name: "Russian Federation"
    },
    {
      id: 182,
      code: "rw",
      name: "Rwanda"
    },
    {
      id: 183,
      code: "bl",
      name: "Saint Barthelemy"
    },
    {
      id: 184,
      code: "sh",
      name: "Saint Helena"
    },
    {
      id: 185,
      code: "kn",
      name: "Saint Kitts And Nevis"
    },
    {
      id: 186,
      code: "lc",
      name: "Saint Lucia"
    },
    {
      id: 187,
      code: "mf",
      name: "Saint Martin"
    },
    {
      id: 188,
      code: "pm",
      name: "Saint Pierre And Miquelon"
    },
    {
      id: 189,
      code: "vc",
      name: "Saint Vincent And Grenadines"
    },
    {
      id: 190,
      code: "ws",
      name: "Samoa"
    },
    {
      id: 191,
      code: "sm",
      name: "San Marino"
    },
    {
      id: 192,
      code: "st",
      name: "Sao Tome and Principe"
    },
    {
      id: 193,
      code: "sa",
      name: "Saudi Arabia"
    },
    {
      id: 194,
      code: "sn",
      name: "Senegal"
    },
    {
      id: 195,
      code: "rs",
      name: "Serbia"
    },
    {
      id: 196,
      code: "sc",
      name: "Seychelles"
    },
    {
      id: 197,
      code: "sl",
      name: "Sierra Leone"
    },
    {
      id: 198,
      code: "sg",
      name: "Singapore"
    },
    {
      id: 199,
      code: "sk",
      name: "Slovakia"
    },
    {
      id: 200,
      code: "si",
      name: "Slovenia"
    },
    {
      id: 201,
      code: "sb",
      name: "Solomon Islands"
    },
    {
      id: 202,
      code: "so",
      name: "Somalia"
    },
    {
      id: 203,
      code: "za",
      name: "South Africa"
    },
    {
      id: 204,
      code: "gs",
      name: "South Georgia"
    },
    {
      id: 205,
      code: "es",
      name: "Spain"
    },
    {
      id: 206,
      code: "lk",
      name: "SriLanka"
    },
    {
      id: 207,
      code: "sd",
      name: "Sudan"
    },
    {
      id: 208,
      code: "sr",
      name: "Suriname"
    },
    {
      id: 209,
      code: "sj",
      name: "Svalbard And Jan Mayen"
    },
    {
      id: 210,
      code: "sz",
      name: "Swaziland"
    },
    {
      id: 211,
      code: "se",
      name: "Sweden"
    },
    {
      id: 212,
      code: "ch",
      name: "Switzerland"
    },
    {
      id: 213,
      code: "sy",
      name: "Syrian Arab Republic"
    },
    {
      id: 214,
      code: "tw",
      name: "Taiwan"
    },
    {
      id: 215,
      code: "tj",
      name: "Tajikistan"
    },
    {
      id: 216,
      code: "tz",
      name: "Tanzania"
    },
    {
      id: 217,
      code: "th",
      name: "Thailand"
    },
    {
      id: 218,
      code: "tl",
      name: "Timor-Leste"
    },
    {
      id: 219,
      code: "tg",
      name: "Togo"
    },
    {
      id: 220,
      code: "tk",
      name: "Tokelau"
    },
    {
      id: 221,
      code: "to",
      name: "Tonga"
    },
    {
      id: 222,
      code: "tt",
      name: "Trinidad and Tobago"
    },
    {
      id: 223,
      code: "tn",
      name: "Tunisia"
    },
    {
      id: 224,
      code: "tr",
      name: "Turkey"
    },
    {
      id: 225,
      code: "tm",
      name: "Turkmenistan"
    },
    {
      id: 226,
      code: "tc",
      name: "Turks And Caicos Islands"
    },
    {
      id: 227,
      code: "tv",
      name: "Tuvalu"
    },
    {
      id: 228,
      code: "ug",
      name: "Uganda"
    },
    {
      id: 229,
      code: "ua",
      name: "Ukraine"
    },
    {
      id: 230,
      code: "ae",
      name: "United Arab Emirates"
    },
    {
      id: 231,
      code: "gb",
      name: "United Kingdom"
    },
    {
      id: 232,
      code: "us",
      name: "United States"
    },
    {
      id: 233,
      code: "um",
      name: "United States Outlying Islands"
    },
    {
      id: 234,
      code: "uy",
      name: "Uruguay"
    },
    {
      id: 235,
      code: "uz",
      name: "Uzbekistan"
    },
    {
      id: 236,
      code: "vu",
      name: "Vanuatu"
    },
    {
      id: 237,
      code: "ve",
      name: "Venezuela"
    },
    {
      id: 238,
      code: "vn",
      name: "Vietnam"
    },
    {
      id: 239,
      code: "vg",
      name: "Virgin Islands (British)"
    },
    {
      id: 240,
      code: "vi",
      name: "Virgin Islands (U.S)"
    },
    {
      id: 241,
      code: "wf",
      name: "Wallis and Futana Islands"
    },
    {
      id: 242,
      code: "eh",
      name: "Western Sahara"
    },
    {
      id: 243,
      code: "ye",
      name: "Yemen"
    },
    {
      id: 244,
      code: "zm",
      name: "Zambia"
    },
    {
      id: 245,
      code: "zw",
      name: "Zimbabwe"
    }];

  constructor(@Inject(TAB_ID) public _tabId: number, public _changeDetector: ChangeDetectorRef, public _applicationRef: ApplicationRef,
              public zone: NgZone, public  _appService: AppService, private  modalService: NgbModal, private http: HttpClient) {
    // this._changeDetector.markForCheck();
  }

  ngOnInit() {
    this.country_list = this.isoCountries.find(x => x.name === 'United States').id;
    this.loadTradeMarkList();
    this.loadCloudInventoryList();
    this.loadCriticalBrandList();
    this.savecriticalbrand();
    this.savecloudinventory();
    this.savetrademark();
  }


  doSearchDownload(): void {
    console.log(this.minimum_stock);
    console.log('11111');

    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, (tabs) => {
      if (tabs.length > 0) {
        if (tabs[0].url !== undefined && tabs[0].url !== null && tabs[0].url !== '') {
          this.tabUrl = tabs[0].url;
          // this.processMainlist(this.tabUrl);
          this.zone.run(() => {
            this.tabUrl = this.tabUrl;
            this.overlaypopup = true;
            this.changeAddress();
            this.processMainlist(this.tabUrl);
          });
        }
      }
    });
  }

  changeAddress() {
    if (this.country_list != null) {

      this.isoCountries.filter(it => {
        if (it.id == this.country_list) {
          this.country = it;
        }
      });
      this.country_list = this.country.code.toUpperCase();

      this.countryData = {
        locationType: 'COUNTRY',
        district: this.country_list,
        countryCode: this.country_list
      };

      var change_add_url = 'https://www.amazon.com/gp/delivery/ajax/address-change.html';
      this._appService.changeAdd(this.countryData.locationType, this.countryData.district, this.countryData.countryCode, change_add_url).subscribe((data) => {
        // this.doSearchDownload();
        // this.processMainlist(this.tabUrl);

      });
    }
  }

  processMainlist(tabUrl): void {
    this.asinList = [];
    for (let i = this.from_page; i <= this.to_page; i++) {
      let perms = '&page=' + i;
      let url = tabUrl + perms;
      this.getAsinList(url, (this.to_page === i) ? true : false);
    }
  }

  getAsinList(url, is_last) {
    this._appService.getURLData(url).subscribe((data) => {
      let result = data.match(/data-asin="[A-Za-z0-9]*"/g);
      result = result.map(item => {
        item = item.replace('data-asin=', '');
        item = item.replace(/["']/g, '');
        item = item.trim();
        return item;
      });
      let asinData = result.filter(item => item !== '');
      this.zone.run(() => {
        this.asinList = this.asinList.concat(asinData);
      });
      if (is_last === true) {
        this.processForAsin();
      }
    });
  }

  processForAsin() {
    this.productList = [];
    for (let i = 0; i < this.asinList.length; i++) {
      this.getAsinDetail(this.asinList[i], ((this.asinList.length - 1) === i) ? true : false);
    }
  }

  filterResult() {
    this.filteredProductList = this.productList;
    this.filterMinimumStock();
    this.filterTradeMark();
    this.finalProductList = this.filteredProductList;
    this.readyColums();
  }

  filterMinimumStock() {
    if (!this.minimum_stock) return;
    if (!this.minimum_stock == 0) return;
    this.filteredProductList = this.filteredProductList.filter(item => {
      if (item.quantity > this.minimum_stock)
        return item;
    })
  }

  filterTradeMark() {
    if (!this.trademarked_product) return;
    this.filteredProductList = this.filteredProductList.filter(item => {
      if (item.quantity > this.minimum_stock)
        return item;
    })
  }

  readyColums() {
    this.finalProductList = this.finalProductList.map(item => {
      let itemNewPrice = this.calculateProfitMargin(item.price);
      let amazon_commision = this.calculateAmazonCommision(itemNewPrice);
      let exchanged_price = this.calculateExchangedPrice(amazon_commision);
      let minimum_price = this.calculateMinimumPrice(exchanged_price);
      let maximum_price = this.calculateMaximumPrice(exchanged_price);

      let newitem = {
        'Title': item.title,
        'Price': item.price,
        'Brand': item.brand,
        'Quantity': item.quantity,
        'Profit Margin': itemNewPrice,
        'Amazon Commision': amazon_commision,
        'Exchange Difference (CAD)': exchanged_price,
        'Stock Code': this.generateStockCode(),
        'Minimum Price': minimum_price,
        'Maximum Price': maximum_price,
      }
      return newitem;
    })

    console.log(this.productList);
    console.log(this.finalProductList);
    this.downloadCsv();
  }

  floatPrice(price) {
    return parseFloat(price.split('$')[1]);
  }

  calculateProfitMargin(price) {
    price = this.floatPrice(price);
    if (this.profit_margin && this.profit_margin > 0) {
      return price + ( (price * this.profit_margin) / 100);
    } else {
      return price;
    }
  }

  calculateAmazonCommision(price) {
    if (this.amazon_commision && this.amazon_commision > 0) {
      return price + ( (price * this.amazon_commision) / 100);
    } else {
      return price;
    }
  }

  calculateExchangedPrice(price) {
    if (this.exchange_difference && this.exchange_difference > 0) {
      return price * this.exchange_difference;
    } else {
      return price;
    }
  }

  calculateMinimumPrice(price) {
    if (this.minimum_price && this.minimum_price > 0) {
      return price - ((this.minimum_price * price) / 100);
    } else {
      return price;
    }
  }

  calculateMaximumPrice(price) {
    if (this.maximum_price && this.maximum_price > 0) {
      return price + ((this.maximum_price * price) / 100);
    } else {
      return price;
    }
  }

  generateStockCode() {
    let code = this.sku_code + this.sku_start_from.toString();
    this.sku_start_from = this.sku_start_from + 1;
    return code;
  }

  getAsinDetail($asin, is_last) {
    let url = 'https://www.amazon.com/dp/';
    url = url + $asin;
    this._appService.getURLData(url).subscribe((data) => {
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(data, 'text/html');
      let product_title = parsedHtml.getElementById('productTitle').innerText.trim();
      let product_price = parsedHtml.getElementById('priceblock_ourprice').innerText.trim();
      let product_brand = parsedHtml.getElementById('bylineInfo').innerText.trim();
      let product_quantity_arr = parsedHtml.getElementById('quantity').innerHTML.match(/<option[^>]*>([^<]*)<\/option>/g);
      let product_quantity = product_quantity_arr[product_quantity_arr.length - 1].replace(/(<([^>]+)>)/ig, "").trim();
      product_quantity = product_quantity.replace("+", "");

      this.product_price = parseFloat(product_price.split('$')[1]);
      this.min_stock = (this.minimum_stock) ? (this.minimum_stock) : '';
      this.mini_price = (this.minimum_price) ? (this.minimum_price) : '';
      this.maxi_price = (this.maximum_price) ? (this.maximum_price) : '';
      this.skucode = (this.sku_code) ? (this.sku_code) : '';
      this.profitmargin = (this.profit_margin) ? (this.profit_margin) : '';
      this.amazoncommision = (this.amazon_commision) ? (this.amazon_commision) : '';
      this.exchangedifference = (this.exchange_difference) ? (this.exchange_difference) : '';
      this.trademarkedproduct = (this.trademarked_product) ? (this.trademarked_product) : '';
      this.discountedproduct = (this.discounted_product) ? (this.discounted_product) : '';
      this.requiringselectionproduct = (this.requiring_selection_product) ? (this.requiring_selection_product) : '';
      this.amazonprimeproduct = (this.amazon_prime_product) ? (this.amazon_prime_product) : '';
      this.cloudinventoryproduct = (this.cloud_inventory_product) ? (this.cloud_inventory_product) : '';
      this.criticalbrandedproduct = (this.critical_branded_product) ? (this.critical_branded_product) : '';
      this.SBAtag = (this.SBA_tag) ? (this.SBA_tag) : '';
      this.product = (this.products) ? (this.products) : '';

      let _result = {
        'title': product_title,
        'price': product_price,
        'brand': product_brand,
        'quantity': product_quantity,
      };

      this.productList = this.productList.concat(_result);

      if (is_last === true) {
        this.filterResult();
      }
    });
  }

  downloadCsv() {
    var head = ['Title', 'Price', 'Brand', 'Quantity', 'Profit Margin', 'Amazon Commision', 'Exchange Difference', 'Stock Code', 'Minimum Price', 'Maximum Price'];
    new Angular5Csv(this.finalProductList, this.product, {headers: (head)});
    this.overlaypopup = false;
  }

  refresh(): void {
    this._changeDetector.detectChanges();
  }

  cancelDownload() {
    this.overlaypopup = !this.overlaypopup;
  }

  editTrademark() {
    this.edittrademarkbox = true;
  }

  editCloudInventory() {
    this.editcloudinventorybox = true;
  }

  editCriticalBrand() {
    this.editcriticalbrandbox = true;
  }

  savecloudinventory() {
    localStorage.setItem('myCloudInventroylistObject', JSON.stringify(this.cloudinventroylist));
    this.editcloudinventorybox = false;

  }

  savetrademark() {
    localStorage.setItem('myTradeMarkListObject', JSON.stringify(this.trademarklist));
    this.edittrademarkbox = false;
  }

  savecriticalbrand() {
    localStorage.setItem('myCriticalBrandListObject', JSON.stringify(this.criticalbrandlist));
    this.editcriticalbrandbox = false;
  }

  loadTradeMarkList() {
    this.trademarklist = JSON.parse(localStorage.getItem('myTradeMarkListObject'));
  }

  loadCloudInventoryList() {
    this.cloudinventroylist = JSON.parse(localStorage.getItem('myCloudInventroylistObject'));
  }

  loadCriticalBrandList() {
    this.criticalbrandlist = JSON.parse(localStorage.getItem('myCriticalBrandListObject'));
  }
}
