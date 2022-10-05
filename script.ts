const dataABAP: any[] = [
    { info: `ERP yazılımları tüm sistemi kolayca yönetmek için modüllerden oluşur. Üretimden satışa takip yapılabilen sistemdir. Üretim sürecinin karmaşıklığını düzeltmek ve verimli hale getirmek için ortaya çıkmıştır. ABAP ERP sistemi için gerekli yazılımların geliştirildiği programlama dilidir.` },
    { info: `ABAP programlama dili yazdığımız talimatların satır satır işleme sokulması ( C++ taki compile işlemi gibi )ile çalışmaktadır.` },
    { info: `Yazılan her satır “keyword” dediğimiz tanımlayıcılar ile başlar ve nokta (.) ile biter.` },
    { info: `Her talimat kelimesi arası en az bir boşluk olması gereklidir. * Talimat satırları iç içe gelebilecek şekilde yazılabilir.(döngüler, fonksiyonlar vb. gibi)` },
    { info: `ABAP editöründe kod yazarken case sensitive yoktur yani büyük küçük harfe duyarlı değildir. Ancak diğer diller gibi yazarken Türkçe karakterlerden kaçınmak gerekmektedir.` },
    { info: `Yorum satırı (*) yada (“) ile başlar.` },
    { info: `Kod tamamlama işini de burada TAB tuşu ile yapabilirsiniz.` },
    { info: `İmleciniz ABAP (DATA vs.) anahtar sözcüğü üzerinde iken F1 e basarsanız sistemdeki o anahtar kelime ile ilgili yardım dosyaları ve varsa örnekler görüntülenebilir.` },
    { info: `Kodlama yaparken kodun düzgün görünmesi için “pretty printer” tuşunu kullanabilirsiniz.` },
    { info: `I :(integer) Tam sayı veri tipine ait değişkenleri tutar. Uzunluğu 4 bittir.` },
    { info: `F :(float) Ondalıklı sayı veri tipine aittir. Uzunluğu 8 bittir.` },
    { info: `P :(packaged number ) ondalıklı sayı veri tipine aittir. Ancak farkı virgülden sonra kaç basamak olacağının programcı tarafından belirlenmesidir.` },
    { info: `N: (numerical character) uzunluğu programcı tarafından belirlenen nümerik karakterleri tanımlamak için kullanılan veri tipidir. ‘012345’ i ele alırsak 6 karakter uzunluğunda nümerik karakter türüne sahip bir veri nesnesidir.` },
    { info: `C:(char) harf gibi karakter tipini tanımlar. Oluşturulacak olan veri nesnesinin uzunluğu programcı tarafından belirlenmelidir.` },
    { info: `STRING:Karakter dizisi için bir veri türüdür. Sabit bir uzunluğu yoktur değişkendir.` },
    { info: `XSTRING: Bit dizisi tanımlamalarında kullanılır ve değişken uzunlukludur. Örnek olarak '0x12AC' yi verebiliriz.` },
    { info: `Sabit bir uzunluğa sahip olanlara tam standart veri türleri(complete types) denirken; uzunluğu programcı tarafından belirleniyor ise tam olmayan standart veri türleri(incomplete types) denir.` },
    { info: `
    <pre>
    <code>
    DATA degisken_adi TYPE degisken_veri_turu 
    LENGTH degısken_uzunlugu VALUE ilk_deger.
    </code>
    </pre>
     :) sondaki nokta kodun bir parçası` },
    { info: `ABAP da sabit bir değer tanımlamak için aşağıdaki syntax ı kullanıyoruz.
    <pre>
    <code> 
    CONSTANTS c_pi_sayisi TYPE P DECIMALS 2 VALUE '3.14'.
    </code>
    </pre>
     tanımlamasını yaptığımızda virgülden sonra 2 basamak devam eden packaged number tipinde bütün program boyunca geçerli bir sabit tanımlamış oluyoruz. Değişken adının başındaki c bize bize CONSTANT olduğunu hemen ifade eder. Her değişkenin özelliği bu şekilde gösterilmelidir.` },
    { info: `TCODE: transaction code` },
    { info: `R/3 stands for Realtime 3-tier architecture ABAP runtime env is written in C, C++ and ABAP Workbench(all ABAP tools) is written in ABAP` },
    { info: `SAP Developer edition da moduller yok` },
    { info: `
    <pre>
    <p>
    Presentation layer : client side

    Application layer : server side

    Database layer : database
    </p>
    </pre>
    ` },
    { info: `
    SE38 to create programme
    ABAP ta programme isimleri Z veya Y ile başlar
    <pre>
    <code>
    " veya * başta gelirse comment satırı anlamına gelir

    / alt satıra atar

    . statement bttiğini ifade eder

    , statement içine yazmaya devam edebilirim

    § bu işaret snippet işareti
    </code>
    </pre>
    ` },
    { info: `matematiksel işlemler + - * / işaretleriyle doğrudan yapılabilir` },
    { info: `tablo, domain işlem alanları SE11 ile açılır
    SAP Logon ile SAP de oluşturulan her objenin tanımı yapılır.
    SE16n tabloları editlemeye yarar.
    Tablonun her satırına Structure, structure ın her sütununa Variable denir.
    SAP Logon da pretty printer ile kod yapısını güzelleştirebiliriz.
    ` },
    { info: `
    <pre>
    <code>
    SELECT : tablolardan sorgu için SQLdeki yapı

    UPDATE : sorgu WHERE key word ü ile yapılır, 
    genelde ID verilir

    INSERT : bir Structure eklemek için kullanılabilir

    DELETE : silmek için kullanılır

    MODIFY : UPDATE + INSERT birleşimi gibi çalışır
    </code>
    </pre>
    ` },
    { info: `ABAP ta tüm statement lar . ile kapatılır.
    keyword den sonra : koymuşsak , ile ayrılmış ardışık statement lar yazabilirim.` },
    { info: `
    event blocks in ABAP
    <pre>
    <code>
    INITIALIZATION : ekrandaki parametrelerden 
    önce çalışmasını istediğimiz program kodlarını 
    yazdığımız alandır.

    AT SELECTION-SCREEN

    START-OF-SELECTION : çalışmasını istediğimiz 
    ABAP kodlarını yazacağımız yer

    END-OF-SELECTION
    </code>
    </pre>
    ` },
    { info: `ÖLÜMCÜL BİLGİ => ABAP da program akışını etkileyen keyword, diğer program akışını etkileyen keyword e kadar geçerlidir.` },
    { info: `gv : global variable
    lv : local variable (form içinde mesela)` },
    { info: `SE38 ile program oluştururken tipini Yürütülebilir program seçersek tek başına excute edilebilir demektir, 
    INCLUDE program seçersek tek çalışmaz bağımlı olarak çalışır demektir.` },
    { info: `Fonksiyon Modülü bir kere yazıp her yerde kullanacağımız yapıya denir. Fonksiyon grubu aynı amaca hizmet eden fonksiyonların bir araya toplanmasıdır.` },
    { info: `Her fonksiyon bir fonksiyon grubu altında olmak zorundadır.` },
    { info: `SE80 işlem kodu ile bir çok türde işlem yapabiliriz. Fonksiyon grubu oluşturmak için kullanıyoruz. Fonksiyon Modülü oluşturma işlem kodu SE37 dir.` },
    { info: `Fonksiyon modülü oluşturma ekran tabları Attributes, Import, Export, Changing, Tables, Exceptions, Source Code.` },
    { info: `
    <pre>
    <code>
    gv : global value,

    lv : local value, 
    
    iv : import value, 
    
    ev : export value 
    akıllı kod kısaltmaları
    </code>
    </pre>
    ` },
    { info: `Fonksiyonda parametreleri opsiyonel yapmazsak girilmeyen her değeri bizden ister.` },
    { info: `
    FUNCTION ÖRNEK SYNTAX
    <pre>
    <code>
    DATA:	gv_num1 TYPE int4,
      gv_num2 TYPE int4,
      gv_sonuc TYPE int4,
      gv_mes TYPE char.
    
    START-OF-SELECTION.
    
      gv_num1 = 20.
      gv_num2 = 0.
      gv_mes  = 'Mesaj1'.
    
    CALL FUNCTION 'Z_BK_EGITIM_FONKSIYONLARI'
      EXPORTING
        iv_num1 = gv_num1 " dışardan parametre alabilsin 
        diye böyle yazıyoruz
        iv_num2 = gv_num2
      IMPORTING
        ev_sonuc = gv_sonuc
      CHANGING
        cv_mes = gv_mes
      EXCEPTIONS
        divided_by_zero = 1
        OTHERS
        IF sy-subrc EQ 0.
            WRITE: / 'Sonuç : ', gv_sonuc.
            WRITE: / 'Mesaj : ', gv_mes.
        ELSEIF sy-subrc EQ 1.
            WRITE: / '0 a bölemezsiniz.'.
        ENDIF.
        </code>
        </pre>
    ` },
    { info: `
    ÖRNEK SYNTAX
    <pre>
    <code>
    DATA :	gv_degs1 TYPE i,
      gv_degs2 TYPE n LENGTH 10,
      gv_degs3 TYPE n LENGTH 10.
    
      gv_degs1 = 64.
      gv_degs2 = 36.
      gv_degs3 = 0.
    
    WRITE: 	gv_degs1,
      gv_degs2.
    
    IF gv_degs1 = gv_degs2.
    WRITE: 'something here'.
    ELSEIF gv_degs1 < gv_degs2.
    WRITE: 'something here'.
    ELSE.
    WRITE: 'something here'.
    ENDIF.
    
    CASE gv_degs1.
    WHEN 1.
    WRITE 'Değer 1'.
    WHEN 2.
    WRITE 'Değer 2'.
    WHEN OTHERS.
    WRITE 'Hiç bir değere eşit değil'.
    ENDCASE.
    
    DO 10 TIMES.
    WRITE / 'DO loop'.
    ENDDO.
    
    WHILE gv_degs3 < 10.
    gv_degs3 = gv_degs3 + 1.
    WRITE / 'WHILE loop'.
    ENDWHILE.
    
    DATA: 	gv_persad TYPE zbk_persad_de, " variable 
    tanımlama, de: data elementi demektir.
      gs_pers_t TYPE zbk_pers_t, " structure tanımala
      gt_pers_t TYPE TABLE OF zbk_pers_t. " table 
      tanımlama
      </code>
      </pre>
      ` },
    { info: `ÖRNEK SYNTAX
    <pre>
    <code>
    PARAMETERS: p_num1 TYPE int4. " tek data alabilir
    
    SELECT-OPTIONS: s_perssoyad FOR gv_prssoyad, " bunu 
    yazabilmek için DATA keyword ü ile tipini belirlemek 
    gerekir. 
                    s_perscn FOR zbk_pers_t-pers_cins. " 
                    bunu bu tablo ile yazabilmek için 
                    TABLES keyword ü ile tabloyu 
                    tanımlamak gerekir.
    
    PARAMETERS: p_cbox1 AS CHECKBOX. " bildiğin checkbox :)
    
    PARAMETERS: 	p_rad1 RADIOBUTTON GROUP gr1,
        p_rad2 RADIOBUTTON GROUP gr1. " bildiğin 
        radio button :)
    
    SELECTION-SCREEN BEGIN OF BLOCK bl1 WITH FRAME TITLE text-001.
    WRITE: 'Burasını ayrı bir kutu içine alır 
    görüntü güzelleşir. 
    001 alanına başlık da yazabiliriz.'
    SELECTION-SCREEN END OF BLOCK bl1.
    
    INITIALIZATION.
    
    AT SELECTION-SCREEN.
    
    START-OF-SELECTION.
      PERFORM sayiya_bir_ekle. " formu çağırmak için 
      PERFORM keyword kullanılır. Çağırmazsak çalışmaz.
      PERFORM sayiya_bir_ekle.
      PERFORM sayiya_bir_ekle.
      PERFORM sayiya_bir_ekle.
    
      PERFORM iki_sayinin_carpimi USING 10  
                                        5.
      " alttaki formu bu event altında çağırdık.

    END-OF-SELECTION.
    
    FORM sayiya_bir_ekle.
      gv_num1 = gv_num1 + 1. " bunun DATA 
      keyword ü ile tipini belirlemek gerekir.
    ENDFORM.
    
    FORM iki_sayinin_carpimi USING p_num1  
    " burda , kullanmaya gerek yok.
               p_num2.
      DATA: lv_sonuc TYPE int4.
      lv_sonuc = p_num1 * p_num2.
      WRITE: 'Sonuç = ', lv_sonuc.
    ENDFORM.
    
    INCLUDE zbk_egt_0005_degiskenler. " yürütülebilir 
    bir program içinde reusability ve clean code 
    için bu şekilde değişkenler, formlar vs. bir yerde 
    toplanıp INCLUDE keyword ü ile bağlanabilir.
    </code>
    </pre>
    ` },
    { info: `
    <textarea class="textarea" placeholder="anladığını/hatırladığını yazar mısın..." ></textarea>
    ` },
    
    
];


const btnABAP: HTMLElement | any = document.querySelector('.btnABAP');
const displayDataABAP: HTMLElement | any = document.querySelector('.displayDataABAP');



const getDataABAP = () => {
    
    const dataABAPLength: number = dataABAP.length;
    const randomNum: number = Math.floor((Math.random()) * dataABAPLength)
    displayDataABAP.innerHTML = `<img src="./assets/sql_logo.png" alt="database">` + dataABAP[randomNum].info;
};




btnABAP.addEventListener('click', getDataABAP);









