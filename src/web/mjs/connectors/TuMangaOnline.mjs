import Connector from '../engine/Connector.mjs';

export default class TuMangaOnline extends Connector {

    constructor() {
        super();
        super.id = 'tumangaonline';
        super.label = 'TuMangaOnline';
        this.tags = [ 'manga', 'spanish' ];
        this.url = 'https://tmofans.com';
        this.requestOptions.headers.set('x-referer', this.url);
    }

    async _initializeConnector() {
        await super._initializeConnector();
        await this.wait(2500);
    }

    async _getMangas() {
        let request = new Request('http://cdn.hakuneko.download/' + this.id + '/mangas.json', this.requestOptions);
        let response = await fetch(request);
        return await response.json();
    }

    async _getChapters(manga) {
        let script = `
            var _0x2859=['YkvDlG58w5PCpMOKLsKMTWdJwphfEsOvw7M2woDCnsKTwpPCjMOKTcOrexrDrcKAwqBVwqhHw7HDi8OAw6LCtQPCr1UBwrsX','dcOFdBsC','VCjCun3CgMKUHMK6wq8b','YX7CiMOMPQ==','UxfCplIMw7tcMsKBMhwNw6zCisKBHHtdLMKvAcO7w5zDpsKNAsOhw4PCm2tRw48Lw6A4w7XCtwzCu0bDkcKKVkrCjBQxw70fAcKiJcKUw5B5S8OVJ8Kywq9ow6bCtS/CosOaw68=','IVlNw7Nk','w4drBMO3AsOhNhfCvw==','LHcBdsKC','w4pOY2MAVWY8URVswpnCpsKiDhcwwoYQJADCisKLNAJlw6nCmgnDmGTDtsKnw6jDmhjDi0tgP8Oew5VqMwnCtkxMwrDCg8OFw7U8bsOzw6vDr8OvwrI=','GFkOwrl5','w7LDun8oeg==','LEZPw4hK','w4hnwqUOKA==','AHpOw4NN','w6Fkw6gcwpE=','QcKATEnDlg==','Y1PCvA==','VBbCuRALw6FYLA==','w7bDl3LCii8=','K0dww4pEIFk=','wr/DhsK5cA/DuTMww53DnmEsd3k=','asKWc0s=','ADbDrxk=','JT8Kw64=','SC/CkmPCpg==','csOwaMORw6E=','dcOteQ4H','a0PDkg==','Uy7Co2c=','w77DmMKTVw==','VnXDisOldg==','XVTDiMOqZQ==','ccKLNMKhLw==','L2oR','ZMKBeX7DgyHCqFXDqg==','w73Dn3TCmjM=','a8KNw4XDpiocGcOaRMKZMMKCUjJfVUrDjw==','FsKcw4vCjSs=','w6Z2RDcP','wpzChyUDYjg=','w7ZXwpcJ','fH/ClcOCAA==','WcOjNDMO','wpTCjxsVfQ==','wpvDvsKzbgI=','w6/Dk28zQg==','WiQ4YMKd','w6VPK8O/Eg==','bxrCimnCgA==','w4dOL1fCt8Oi','WAVWwqlW','Olk9esKD'];(function(_0x83fbe8,_0x37b083){var _0xb462be=function(_0x3bc219){while(--_0x3bc219){_0x83fbe8['push'](_0x83fbe8['shift']());}};_0xb462be(++_0x37b083);}(_0x2859,0x100));var _0x3302=function(_0x83fbe8,_0x37b083){_0x83fbe8=_0x83fbe8-0x0;var _0xb462be=_0x2859[_0x83fbe8];if(_0x3302['BUhwwg']===undefined){(function(){var _0x398d70;try{var _0x4552c3=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x398d70=_0x4552c3();}catch(_0xd20d7a){_0x398d70=window;}var _0x22fa2b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x398d70['atob']||(_0x398d70['atob']=function(_0x1ba942){var _0x4e5a6f=String(_0x1ba942)['replace'](/=+$/,'');for(var _0x5c2481=0x0,_0x1d0821,_0xb0b0b5,_0x551bf9=0x0,_0x44ce65='';_0xb0b0b5=_0x4e5a6f['charAt'](_0x551bf9++);~_0xb0b0b5&&(_0x1d0821=_0x5c2481%0x4?_0x1d0821*0x40+_0xb0b0b5:_0xb0b0b5,_0x5c2481++%0x4)?_0x44ce65+=String['fromCharCode'](0xff&_0x1d0821>>(-0x2*_0x5c2481&0x6)):0x0){_0xb0b0b5=_0x22fa2b['indexOf'](_0xb0b0b5);}return _0x44ce65;});}());var _0x502a37=function(_0x3861c8,_0x37b083){var _0x1b5440=[],_0x559ada=0x0,_0x1dfff4,_0x5e4b69='',_0x3c5443='';_0x3861c8=atob(_0x3861c8);for(var _0x5070d4=0x0,_0x6c6ec3=_0x3861c8['length'];_0x5070d4<_0x6c6ec3;_0x5070d4++){_0x3c5443+='%'+('00'+_0x3861c8['charCodeAt'](_0x5070d4)['toString'](0x10))['slice'](-0x2);}_0x3861c8=decodeURIComponent(_0x3c5443);for(var _0x3f43e3=0x0;_0x3f43e3<0x100;_0x3f43e3++){_0x1b5440[_0x3f43e3]=_0x3f43e3;}for(_0x3f43e3=0x0;_0x3f43e3<0x100;_0x3f43e3++){_0x559ada=(_0x559ada+_0x1b5440[_0x3f43e3]+_0x37b083['charCodeAt'](_0x3f43e3%_0x37b083['length']))%0x100;_0x1dfff4=_0x1b5440[_0x3f43e3];_0x1b5440[_0x3f43e3]=_0x1b5440[_0x559ada];_0x1b5440[_0x559ada]=_0x1dfff4;}_0x3f43e3=0x0;_0x559ada=0x0;for(var _0x365565=0x0;_0x365565<_0x3861c8['length'];_0x365565++){_0x3f43e3=(_0x3f43e3+0x1)%0x100;_0x559ada=(_0x559ada+_0x1b5440[_0x3f43e3])%0x100;_0x1dfff4=_0x1b5440[_0x3f43e3];_0x1b5440[_0x3f43e3]=_0x1b5440[_0x559ada];_0x1b5440[_0x559ada]=_0x1dfff4;_0x5e4b69+=String['fromCharCode'](_0x3861c8['charCodeAt'](_0x365565)^_0x1b5440[(_0x1b5440[_0x3f43e3]+_0x1b5440[_0x559ada])%0x100]);}return _0x5e4b69;};_0x3302['diBNcR']=_0x502a37;_0x3302['wGKYTl']={};_0x3302['BUhwwg']=!![];}var _0x28588d=_0x3302['wGKYTl'][_0x83fbe8];if(_0x28588d===undefined){if(_0x3302['xrzNyu']===undefined){_0x3302['xrzNyu']=!![];}_0xb462be=_0x3302['diBNcR'](_0xb462be,_0x37b083);_0x3302['wGKYTl'][_0x83fbe8]=_0xb462be;}else{_0xb462be=_0x28588d;}return _0xb462be;};new Promise(_0x5a50f5=>{var _0x3b03ee={};_0x3b03ee[_0x3302('0x0','[8%W')]=_0x3302('0x1','raj5');_0x3b03ee[_0x3302('0x2','QF&J')]=function(_0x59f878,_0x439d4c){return _0x59f878(_0x439d4c);};_0x3b03ee[_0x3302('0x3','6)S1')]=_0x3302('0x4',']ZUE');_0x3b03ee[_0x3302('0x5','MdOT')]=_0x3302('0x6','[8%W');_0x3b03ee[_0x3302('0x7','(X#v')]=_0x3302('0x8','r3VQ');_0x3b03ee[_0x3302('0x9','](Oz')]=_0x3302('0xa','2zmH');_0x3b03ee[_0x3302('0xb','tJqQ')]=_0x3302('0xc','yItd');_0x3b03ee[_0x3302('0xd','&6uA')]=function(_0x2e75ce,_0x4adfca){return _0x2e75ce<_0x4adfca;};_0x3b03ee[_0x3302('0xe','lo&X')]=function(_0x341705,_0x4b9f40){return _0x341705+_0x4b9f40;};_0x3b03ee[_0x3302('0xf','](Oz')]=function(_0x5d9458,_0x96a00b){return _0x5d9458+_0x96a00b;};_0x3b03ee[_0x3302('0x10','U!fX')]=function(_0x25cd97,_0xacf198,_0x4fe844){return _0x25cd97(_0xacf198,_0x4fe844);};let _0x2cf5c4={};_0x2cf5c4[_0x3b03ee[_0x3302('0x11','](Oz')]]=[..._0x3b03ee[_0x3302('0x12','4$MV')]($,_0x3b03ee[_0x3302('0x13','0L3t')])][_0x3302('0x14','(X#v')](_0x358880=>$(_0x358880)[_0x3302('0x15','r3VQ')]()[_0x3302('0x16','nYbG')]()[_0x3302('0x17','](Oz')](_0x3302('0x18','B&I$'))[_0x3302('0x19','UBaF')]('h4')[_0x3302('0x1a','lTkR')]()[_0x3302('0x1b','Hvkl')]());_0x2cf5c4[_0x3b03ee[_0x3302('0x1c','[8%W')]]=[..._0x3b03ee[_0x3302('0x1d','CV*J')]($,_0x3b03ee[_0x3302('0x1e','MdOT')])][_0x3302('0x1f',']ZUE')](_0x10d764=>_0x10d764[_0x3302('0x20','[8%W')][_0x3302('0x21','wkl[')]());_0x2cf5c4[_0x3b03ee[_0x3302('0x22','qI5)')]]=[..._0x3b03ee[_0x3302('0x23','qI5)')]($,_0x3b03ee[_0x3302('0x24','MN90')])][_0x3302('0x25','&6uA')](_0x89bf15=>_0x89bf15[_0x3302('0x26','0L3t')][_0x3302('0x27','nYbG')](new RegExp(_0x3302('0x28','vZKt')))[0x1]);let _0xb2a490=[];for(let _0x72a863=0x0;_0x3b03ee[_0x3302('0x29','emk7')](_0x72a863,_0x2cf5c4[_0x3b03ee[_0x3302('0x2a','yItd')]][_0x3302('0x2b','%X&a')]);_0x72a863++){_0xb2a490[_0x3302('0x2c','U!fX')]({'id':_0x72a863,'title':_0x3b03ee[_0x3302('0x2d','(X#v')](_0x3b03ee[_0x3302('0x2e',']8M[')](_0x3b03ee[_0x3302('0x2f','%X&a')](_0x2cf5c4[_0x3b03ee[_0x3302('0x30','B&I$')]][_0x72a863],'\x20['),_0x2cf5c4[_0x3b03ee[_0x3302('0x31','lo&X')]][_0x72a863]),']'),'language':_0x2cf5c4[_0x3b03ee[_0x3302('0x32','2sRz')]][_0x72a863]});}_0x3b03ee[_0x3302('0x33','2zmH')](setTimeout,()=>_0x5a50f5(_0xb2a490),0x9c4);});
        `;
        let request = new Request(this.url + manga.id, this.requestOptions);
        return await Engine.Request.fetchUI(request, script);
    }

    async _getChapterLink(chapter) {
        let script = `
            window['chapter'] = ${chapter.id};
            var _0xd800=['K8O8FEPDmhJQYMOiwrTDlcOlwqpDwoUSPhPCsxXCgVVBw5JGKMKFwptOw6XCk2lZIEnChsKjVTPCscOZwrHCqQDDqURAwoQ=','BhbDgg4sw4U2','wqZMeiTDjg==','w6rDtcO8w4xQ','N3DDocOFZA==','w44Qw7HCkcKuO8KAIyY=','XMKyw6FWwoA=','w7FOYVzCj8OdCA==','wrPCgFjDhUc=','wqnDqT1uFQDCjAkjTA==','d3LDozFr','wr7Cp1rDgQ==','w4wSw586','w40Vwr3Dvmc=','w613wq4=','wrLCrFlpwoTDnMOaKQ==','woIoBC/DkQ==','SHfDiTVeHsKv','Ti5gwrDCnA==','wq3CqEvDlcOKw5/DnQ==','w7gywpDCgTg=','w57Cr8O4wrhl','IMOKL0pA','w4FcwoYAZg==','FMOMw6rCj8Od','dDxtw7YU'];(function(_0x1498c4,_0x2b4259){var _0x4d60fb=function(_0x1aa56d){while(--_0x1aa56d){_0x1498c4['push'](_0x1498c4['shift']());}};_0x4d60fb(++_0x2b4259);}(_0xd800,0x155));var _0x1204=function(_0x1498c4,_0x2b4259){_0x1498c4=_0x1498c4-0x0;var _0x4d60fb=_0xd800[_0x1498c4];if(_0x1204['SmeXDI']===undefined){(function(){var _0x3d53a6=function(){var _0x4b3955;try{_0x4b3955=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x55efe3){_0x4b3955=window;}return _0x4b3955;};var _0x444060=_0x3d53a6();var _0x2fca36='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x444060['atob']||(_0x444060['atob']=function(_0x123adf){var _0x265906=String(_0x123adf)['replace'](/=+$/,'');for(var _0x513385=0x0,_0x58f5bf,_0x2dc233,_0x12e041=0x0,_0x3194f6='';_0x2dc233=_0x265906['charAt'](_0x12e041++);~_0x2dc233&&(_0x58f5bf=_0x513385%0x4?_0x58f5bf*0x40+_0x2dc233:_0x2dc233,_0x513385++%0x4)?_0x3194f6+=String['fromCharCode'](0xff&_0x58f5bf>>(-0x2*_0x513385&0x6)):0x0){_0x2dc233=_0x2fca36['indexOf'](_0x2dc233);}return _0x3194f6;});}());var _0x552479=function(_0x3e8fd4,_0x2b4259){var _0x393bfa=[],_0x2f5977=0x0,_0x5ddee6,_0x551ddb='',_0xa2774e='';_0x3e8fd4=atob(_0x3e8fd4);for(var _0x596e63=0x0,_0x4f2063=_0x3e8fd4['length'];_0x596e63<_0x4f2063;_0x596e63++){_0xa2774e+='%'+('00'+_0x3e8fd4['charCodeAt'](_0x596e63)['toString'](0x10))['slice'](-0x2);}_0x3e8fd4=decodeURIComponent(_0xa2774e);for(var _0x3ed637=0x0;_0x3ed637<0x100;_0x3ed637++){_0x393bfa[_0x3ed637]=_0x3ed637;}for(_0x3ed637=0x0;_0x3ed637<0x100;_0x3ed637++){_0x2f5977=(_0x2f5977+_0x393bfa[_0x3ed637]+_0x2b4259['charCodeAt'](_0x3ed637%_0x2b4259['length']))%0x100;_0x5ddee6=_0x393bfa[_0x3ed637];_0x393bfa[_0x3ed637]=_0x393bfa[_0x2f5977];_0x393bfa[_0x2f5977]=_0x5ddee6;}_0x3ed637=0x0;_0x2f5977=0x0;for(var _0x1ff12f=0x0;_0x1ff12f<_0x3e8fd4['length'];_0x1ff12f++){_0x3ed637=(_0x3ed637+0x1)%0x100;_0x2f5977=(_0x2f5977+_0x393bfa[_0x3ed637])%0x100;_0x5ddee6=_0x393bfa[_0x3ed637];_0x393bfa[_0x3ed637]=_0x393bfa[_0x2f5977];_0x393bfa[_0x2f5977]=_0x5ddee6;_0x551ddb+=String['fromCharCode'](_0x3e8fd4['charCodeAt'](_0x1ff12f)^_0x393bfa[(_0x393bfa[_0x3ed637]+_0x393bfa[_0x2f5977])%0x100]);}return _0x551ddb;};_0x1204['agDNEQ']=_0x552479;_0x1204['RiKNMv']={};_0x1204['SmeXDI']=!![];}var _0x1e98bc=_0x1204['RiKNMv'][_0x1498c4];if(_0x1e98bc===undefined){if(_0x1204['YiWJuV']===undefined){_0x1204['YiWJuV']=!![];}_0x4d60fb=_0x1204['agDNEQ'](_0x4d60fb,_0x2b4259);_0x1204['RiKNMv'][_0x1498c4]=_0x4d60fb;}else{_0x4d60fb=_0x1e98bc;}return _0x4d60fb;};new Promise((_0x394917,_0xae9ad7)=>{var _0x425549={};_0x425549[_0x1204('0x0','gN^&')]=function(_0x4a26a3,_0x37d0e6){return _0x4a26a3(_0x37d0e6);};_0x425549[_0x1204('0x1','wn))')]=_0x1204('0x2','G&#Q');_0x425549[_0x1204('0x3','U]FM')]=_0x1204('0x4','f7jL');_0x425549[_0x1204('0x5','nqQd')]=_0x1204('0x6','V6e0');_0x425549[_0x1204('0x7','7IS1')]=function(_0xcf194d,_0x28b129,_0x52ef9c){return _0xcf194d(_0x28b129,_0x52ef9c);};let _0x2170e8=$[_0x1204('0x8','%WIS')];$[_0x1204('0x9','smEq')]=_0x3d30c6=>{var _0x1947d3={};_0x1947d3[_0x1204('0xa','*JoM')]=function(_0x5a7cd3,_0x7ce01b){return _0x425549.DOeTM(_0x5a7cd3,_0x7ce01b);};if(_0x3d30c6[_0x1204('0xb','sCfE')][_0x1204('0xc','u&cR')](_0x425549[_0x1204('0xd','0pc$')])){_0x3d30c6[_0x1204('0xe','7IS1')]=_0x174601=>{_0x425549[_0x1204('0xf','*9Wy')](_0x394917,_0x174601[_0x1204('0x10','%WIS')](_0x425549[_0x1204('0x11',')diG')],_0x425549[_0x1204('0x12','bfVG')]));};_0x3d30c6[_0x1204('0x13','5C*3')]=(_0x23e1ca,_0x4ff958,_0x952953)=>{_0x1947d3[_0x1204('0x14','sCfE')](_0xae9ad7,_0x952953);};}_0x425549[_0x1204('0x15','x0cD')](_0x2170e8,_0x3d30c6);};_0x425549[_0x1204('0x16','8ZSL')](setTimeout,()=>$(_0x1204('0x17','@a3p'))[window[_0x1204('0x18','nKM1')]][_0x1204('0x19','5sE1')](),0x3e8);});
        `;
        let request = new Request(this.url + chapter.manga.id, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        return new URL(data, request.url);
    }

    async _getPages(chapter) {
        let script = `
            const _0x42f6=['DcOrdylpw5gD','wqF5wqtv','w4Nkw48XXw==','UD/DksKzw7nDr17CosKH','w5XCg8Ky','w6jDpcKDUcO0','wrVTw6LCgMK3','wq5oKQ==','W8OxTsOYwpM=','C8OlXiBk','wqJowrvCpRU=','w6kSa3PDkg==','wpTCoFJSPRrDkcO7w4fDi8KICg==','w7UmKMOcw6k=','cEg0','InMxwphN','PmJkw6lxK8Kaw7vDq8KDMsKg','MhzCgcKLwrQ=','w7/Dr8K8R8OGwr1+OMKVw7pxQMON','HXZxCUw=','w4IeEsOJw6Q/dlnDkUtC','C1Fow45N','w7VRw4AQ','DcODT8Kfw7g=','wrtdwoDCucKEw58=','wqtOwqhFwp8=','T3vDtz/CoQ==','b1laJl5uwoUcwpHCugbCtsOiw4zCh1d1WcOew6HCmw==','aG5nw4LDlw==','PMOYwobDi8KWUQ==','ODdNaMKJ','VMOrdMOcwq8=','wrsnw5w=','wrF3JsKQwqU=','wr8+w4zDq8Oq','wpkkw4Zsw4xg','UQxWw7c6','LzFnZ8K0wr7CsMKVwpbDgMK5bMOcwrY=','w6IDwpbClMK5','w6vDtMKgQ8OIwr1kIMK1','wrBMwqHCmCE=','RMO/UMO0wrnCmMKSw4cPwoQAFsKzw7HClGprOsK9wqLCksKkw5x1AFjCssK7w65dw4pHLkzCnsKMIMOlwqVMw6w=','wrVOwoplwr0=','KVlSLw==','wrZSwoFywq0=','YS9nw4s=','wr99wqlbwrE=','wq7CsxNXwqXDiA==','wrV8IMKHwq4=','XzjDksKyw4LDiV/CrsKYwpBx','w5jDp8KFW8Oo','wpTCmyVswpnDvsOyw60qLsOmwrbDsRHCtcKX','woIxw6Ndw4Y=','ZF8jwqfDsRQAEMOYwrY1wo4xGRga','C8OgwpzDi8KC','bTLDp8K3wpxmw4/Cnw==','wpzCrQRqwog=','wqVHw4bCrsK9Cw==','CQPCrcKxwoM=','BsOlUg==','w4TClsKLwqFY','JsObQyx1','wp/Cr8Knw7XCgg==','wq5/Pg==','A8OnfMKAw78=','w6hcwqQXw6Y=','RnlAw4DDvw==','EcOSScKdwow=','HF5Sw6Jg','UVDDgkrCtA==','QmIywqLDjA==','ICZmCcOW','wqDCpcKJw43CkA==','FcKULCnDjA==','e2vDlmnCpg==','UhPDisKfw6E=','wrAuw4jDuMOw','NWt3O1o=','wqZPw5jCkMK+','w6ckAsOtwq8=','wrDCpGx/Bg==','fsKDTcKrYg==','MBdgFcOX','w5YgQFfDjQ==','KsKkCTkp','cSNsw48+wqkO','PMOFwqzCr00=','RlfDjFjCjQ==','Xg1rw6YD','w6wzwojClMKL','FDh3IsOY','R07DuVnClg==','w5xhw4TCi8KM','w6d+w5nCqsKR','FxJM'];(function(_0x195fae,_0x268b46){const _0x538e5c=function(_0x5032d3){while(--_0x5032d3){_0x195fae['push'](_0x195fae['shift']());}};_0x538e5c(++_0x268b46);}(_0x42f6,0x1e4));const _0x34bc=function(_0x195fae,_0x268b46){_0x195fae=_0x195fae-0x0;let _0x538e5c=_0x42f6[_0x195fae];if(_0x34bc['UQPIzL']===undefined){(function(){const _0x563f4d=function(){let _0x2d3f79;try{_0x2d3f79=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x368823){_0x2d3f79=window;}return _0x2d3f79;};const _0x36b20d=_0x563f4d();const _0x2ab7f1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x36b20d['atob']||(_0x36b20d['atob']=function(_0x22bc1e){const _0x3d0507=String(_0x22bc1e)['replace'](/=+$/,'');let _0x2aef12='';for(let _0x1bcecf=0x0,_0x13ff48,_0x1466e8,_0x4e96c0=0x0;_0x1466e8=_0x3d0507['charAt'](_0x4e96c0++);~_0x1466e8&&(_0x13ff48=_0x1bcecf%0x4?_0x13ff48*0x40+_0x1466e8:_0x1466e8,_0x1bcecf++%0x4)?_0x2aef12+=String['fromCharCode'](0xff&_0x13ff48>>(-0x2*_0x1bcecf&0x6)):0x0){_0x1466e8=_0x2ab7f1['indexOf'](_0x1466e8);}return _0x2aef12;});}());const _0x1a115f=function(_0x3bd6ce,_0x268b46){let _0xd8aa38=[],_0xa20355=0x0,_0x11aa4c,_0x4f4f3e='',_0x4d3249='';_0x3bd6ce=atob(_0x3bd6ce);for(let _0x229f2c=0x0,_0x24d9ba=_0x3bd6ce['length'];_0x229f2c<_0x24d9ba;_0x229f2c++){_0x4d3249+='%'+('00'+_0x3bd6ce['charCodeAt'](_0x229f2c)['toString'](0x10))['slice'](-0x2);}_0x3bd6ce=decodeURIComponent(_0x4d3249);let _0x339252;for(_0x339252=0x0;_0x339252<0x100;_0x339252++){_0xd8aa38[_0x339252]=_0x339252;}for(_0x339252=0x0;_0x339252<0x100;_0x339252++){_0xa20355=(_0xa20355+_0xd8aa38[_0x339252]+_0x268b46['charCodeAt'](_0x339252%_0x268b46['length']))%0x100;_0x11aa4c=_0xd8aa38[_0x339252];_0xd8aa38[_0x339252]=_0xd8aa38[_0xa20355];_0xd8aa38[_0xa20355]=_0x11aa4c;}_0x339252=0x0;_0xa20355=0x0;for(let _0x9b96c=0x0;_0x9b96c<_0x3bd6ce['length'];_0x9b96c++){_0x339252=(_0x339252+0x1)%0x100;_0xa20355=(_0xa20355+_0xd8aa38[_0x339252])%0x100;_0x11aa4c=_0xd8aa38[_0x339252];_0xd8aa38[_0x339252]=_0xd8aa38[_0xa20355];_0xd8aa38[_0xa20355]=_0x11aa4c;_0x4f4f3e+=String['fromCharCode'](_0x3bd6ce['charCodeAt'](_0x9b96c)^_0xd8aa38[(_0xd8aa38[_0x339252]+_0xd8aa38[_0xa20355])%0x100]);}return _0x4f4f3e;};_0x34bc['dWYiNH']=_0x1a115f;_0x34bc['LLjBXD']={};_0x34bc['UQPIzL']=!![];}const _0x407973=_0x34bc['LLjBXD'][_0x195fae];if(_0x407973===undefined){if(_0x34bc['hohufv']===undefined){_0x34bc['hohufv']=!![];}_0x538e5c=_0x34bc['dWYiNH'](_0x538e5c,_0x268b46);_0x34bc['LLjBXD'][_0x195fae]=_0x538e5c;}else{_0x538e5c=_0x407973;}return _0x538e5c;};new Promise((_0x550fac,_0x5bfc75)=>{let _0x5878d9={};_0x5878d9[_0x34bc('0x0','kA(i')]=_0x34bc('0x1','vYqQ');_0x5878d9[_0x34bc('0x2','@Uca')]=_0x34bc('0x3','iNd3');_0x5878d9[_0x34bc('0x4','pX)Y')]=_0x34bc('0x5','Dh**');_0x5878d9[_0x34bc('0x6','eC^i')]=_0x34bc('0x7','j9c6');_0x5878d9[_0x34bc('0x8','$C)!')]=_0x34bc('0x9','[P7)');_0x5878d9[_0x34bc('0xa',')aiY')]=_0x34bc('0xb','pX)Y');_0x5878d9[_0x34bc('0xc','j9c6')]=_0x34bc('0xd','1u&k');_0x5878d9[_0x34bc('0xe','h^Ae')]=_0x34bc('0xf','XZT)');_0x5878d9[_0x34bc('0x10','Non$')]=function(_0x4822b2,_0x483b9e){return _0x4822b2(_0x483b9e);};_0x5878d9[_0x34bc('0x11','qt^z')]=_0x34bc('0x12',')aiY');_0x5878d9[_0x34bc('0x13','7WIz')]=_0x34bc('0x14','z%yh');_0x5878d9[_0x34bc('0x15','zZfH')]=function(_0x23afc1,_0x43267c){return _0x23afc1(_0x43267c);};_0x5878d9[_0x34bc('0x16','rvaB')]=_0x34bc('0x17','vFD7');_0x5878d9[_0x34bc('0x18','5%aS')]=function(_0x1bcf66,_0x48b72d){return _0x1bcf66(_0x48b72d);};_0x5878d9[_0x34bc('0x19','rYho')]=_0x34bc('0x1a','vFD7');_0x5878d9[_0x34bc('0x1b','Kh3q')]=_0x34bc('0x1c','zZfH');_0x5878d9[_0x34bc('0x1d','cQBX')]=_0x34bc('0x1e','[P7)');_0x5878d9[_0x34bc('0x1f','vYqQ')]=_0x34bc('0x20','rvaB');_0x5878d9[_0x34bc('0x21','Non$')]=_0x34bc('0x22',')aiY');_0x5878d9[_0x34bc('0x23','77Tu')]=_0x34bc('0x24','Kh3q');_0x5878d9[_0x34bc('0x25','77Tu')]=_0x34bc('0x26','!gaN');_0x5878d9[_0x34bc('0x27','5%aS')]=_0x34bc('0x28','RhJ9');_0x5878d9[_0x34bc('0x29','[P7)')]=_0x34bc('0x2a','!gaN');_0x5878d9[_0x34bc('0x2b','vFD7')]=_0x34bc('0x2c','Dh**');_0x5878d9[_0x34bc('0x2d','z%yh')]=_0x34bc('0x2e','Tf2x');_0x5878d9[_0x34bc('0x2f','!gaN')]=_0x34bc('0x30','U^kr');_0x5878d9[_0x34bc('0x31','$C)!')]=function(_0x3bbbd2,_0x2bd4a8,_0x538528){return _0x3bbbd2(_0x2bd4a8,_0x538528);};let _0x372691={};_0x372691[_0x34bc('0x32','h^Ae')]=function(){return this[_0x5878d9[_0x34bc('0x33','9xh5')]]||this[_0x5878d9[_0x34bc('0x34','kA(i')]](_0x5878d9[_0x34bc('0x35',']HlL')]);};_0x372691[_0x34bc('0x36','5%aS')]=function(_0x56a84a){this[_0x5878d9[_0x34bc('0x37','h^Ae')]]=_0x56a84a;this[_0x5878d9[_0x34bc('0x38','ci64')]](_0x5878d9[_0x34bc('0x39','7WIz')],_0x56a84a);this[_0x5878d9[_0x34bc('0x3a','[ORw')]](new window[_0x5878d9[(_0x34bc('0x3b','j9c6'))]](_0x5878d9[_0x34bc('0x3c','FM(C')]));};this[_0x5878d9[_0x34bc('0x3d','Dh**')]][_0x5878d9[_0x34bc('0x3e','f[Xh')]](Image[_0x5878d9[_0x34bc('0x3f',']HlL')]],_0x5878d9[_0x34bc('0x40','O(Sg')],_0x372691);for(let _0x290de1 of _0x5878d9[_0x34bc('0x41','FM(C')]($,_0x5878d9[_0x34bc('0x42','RhJ9')])){try{this[_0x5878d9[_0x34bc('0x43','rYho')]](_0x290de1[_0x5878d9[_0x34bc('0x44',')aiY')]]);}finally{continue;}}this[_0x5878d9[_0x34bc('0x45','U^kr')]][_0x5878d9[_0x34bc('0x46','hM%F')]]=Number[_0x5878d9[_0x34bc('0x47','iNd3')]];let _0x4eba88=this[_0x5878d9[_0x34bc('0x48','29OO')]][_0x5878d9[_0x34bc('0x49','f[Xh')]];this[_0x5878d9[_0x34bc('0x4a','@Uca')]][_0x5878d9[_0x34bc('0x4b','suoi')]]=()=>{let _0x31eab3={};_0x31eab3[_0x34bc('0x4c','Kh3q')]=_0x5878d9[_0x34bc('0x4d','5irL')];return _0x31eab3;};this[_0x5878d9[_0x34bc('0x4e','FM(C')]][_0x5878d9[_0x34bc('0x4f','Kh3q')]](new CustomEvent(_0x5878d9[_0x34bc('0x50','cQBX')]));_0x5878d9[_0x34bc('0x51','f[Xh')](setTimeout,()=>{try{let _0xcc3800=[..._0x5878d9[_0x34bc('0x52','FM(C')]($,_0x5878d9[_0x34bc('0x53',']nJH')])];_0xcc3800=_0xcc3800[_0x5878d9[_0x34bc('0x54',']nJH')]](_0x25e274=>_0x25e274[_0x34bc('0x55','f[Xh')]&&_0x4eba88(_0x25e274)[_0x34bc('0x56','kA(i')]!==_0x34bc('0x57','77Tu'));_0xcc3800=_0xcc3800[_0x5878d9[_0x34bc('0x58','1u&k')]]((_0x29f5b9,_0x24fca0)=>_0x24fca0===_0xcc3800[_0x34bc('0x59','RhJ9')](_0x4d51c3=>_0x4d51c3[_0x34bc('0x5a','9xh5')]===_0x29f5b9[_0x34bc('0x5a','9xh5')]));_0x5878d9[_0x34bc('0x5b','[P7)')](_0x550fac,_0xcc3800[_0x5878d9[_0x34bc('0x5c','U^kr')]](_0x52db85=>_0x52db85[_0x34bc('0x5d','5%aS')]));}catch(_0x20f367){_0x5878d9[_0x34bc('0x5e','rvaB')](_0x5bfc75,_0x20f367);}},0x3e8);});
        `;
        let uri = await this._getChapterLink(chapter);
        let request = new Request(uri, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        return data.map(img => this.createConnectorURI({
            url: this.getAbsolutePath(img, request.url),
            referer: request.url
        }));
    }

    _handleConnectorURI( payload ) {
        /*
         * TODO: only perform requests when from download manager
         * or when from browser for preview and selected chapter matches
         */
        this.requestOptions.headers.set( 'x-referer', payload.referer );
        let promise = super._handleConnectorURI( payload.url );
        this.requestOptions.headers.delete( 'x-referer' );
        return promise;
    }
}