import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  contentIndex: number = 0;
  recipeCategory: string = '';

  private breakfastRecipes: any[] = [
    {
      title: 'Pankek',
      imgURL:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2023/02/tam-olculu-pankek-yemekcom.jpg',
      serving: '3-4',
      ingredients: [
        '3,5 su bardağı un',
        '3 yemek kaşığı toz şeker',
        '1 çay kaşığı tuz',
        '1 paket kabartma tozu',
        '1 paket vanilin',
        '1 çay kaşığı karbonat',
        '2,5 su bardağı süt',
        '1/3 su bardağı sıvı yağ',
        '1/3 su bardağı elma sirkesi',
        '3 adet yumurta',
      ],
      instructions:
        'Kuru malzemeleri elekten geçirerek derin bir kaba alıp karıştırın. Sıvı malzemeleri ayrı bir kapta birleştirip karıştırın. Sıvı karışımı kuru malzemelerin üstüne döküp spatula ile harmanlayın. Tüm kuru malzeme ıslandıktan sonra topaklı bir şekilde 10 dakika dinlendirin.Geniş bir tavayı orta sıcaklıkta ısıtın her bir pankek için yarım çay kaşığı kadar tereyağı ekleyin ve eriyen yağın üstüne büyük bir kaşık dolusu harçtan koyup pişmeye bırakın.Pankekin üstü göz göz olup kenarları pürüzsüzleşince ters çevirin ve yaklaşık 1-2 dakika daha pişirin. Pankeke dokunduğunuzda bastırdığınız yer geri doğru geliyorsa pişmiş demektir, tavadan alın. Kalan harç için bitene kadar bu işlemi tekrarlayın.Pişen pankekleri dilerseniz oda sıcaklığında tereyağı ve akçaağaç şurubu ya da dilediğiniz reçellerle servis edebilirsiniz. Afiyet olsun!',
    },
    {
      title: 'Patatesli Sucuk Sote',
      imgURL:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/12/patatesli-sucuk-sote-onecikan.jpg',
      serving: '4',
      ingredients: [
        '2 adet patates',
        '2 adet yeşil biber',
        '1 adet kapya biber',
        '1 adet parmak sucuk',
        '3 yemek kaşığı sıvı yağ',
        '1 çay kaşığı tuz',
        '1/2 çay kaşığı karabiber',
      ],
      instructions:
        'Patatesi küp doğrayın, kızgın yağda kızartın. Biberleri de küp küp doğrayın, tavada az yağda soteleyin. Biberler renk alınca içine halka şeklinde doğranmış sucukları ilave edin.Tuz ve karabiberi de ekleyip karıştırdıktan sonra hazır. Afiyet olsun!',
    },
  ];

  private mainCourseRecipes: any[] = [
    {
      title: 'Domates Soslu Spaghetti',
      imgURL:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2015/12/domates-soslu-makarna-yemekcom-2.jpg',
      serving: '4',
      ingredients: [
        '1 paket spagetti',
        '5 litre su',
        '1 avuç tuz',
        '4 adet domates(büyük, olgun, yumuşak)',
        '3 diş sarımsak',
        '1 çay kaşığı tuz',
        '1/2 çay bardağı zeytinyağı',
        '1 tutam karabiber',
        '4 yemek kaşığı zeytinyağı',
      ],
      instructions:
        'Sos için zeytinyağını tencereye ekleyin ve orta ateşteki ocağa yerleştirin, ardından sarımsakları ilave edin. Domateslerin ortasındaki beyaz kısmı çıkartın ve iri parçalar halinde doğrayın, tencereye ekleyin. Üzerine tuzu da ekleyin ve karıştırın. Sosu yaklaşık 30 dakika pişirin. Sos pişerken makarna için suyu kaynatın, tuz atın ve spaghettileri pakette yazan sürenin yarısı kadar pişirin. Sosu süzgeçten bir spatula ile bastırıp geniş bir tavaya süzün. Süzdüğünüz sosu yüksek ateşte kaynatın , yarı haşlanmış makaranayı da ekleyin ve tüm sosu çekene kadar pişirin. Pişen makarnayı servis kaselerine alın, üzerine taze çekilmiş karabiber ve zeytinyağını ekleyip servis edin. Afiyet olsun!',
    },
    {
      title: 'Fırında Patlıcan Kebabı Tarifi',
      imgURL:
        'https://cdn.yemek.com/mncrop/940/625/uploads/2016/11/patlican-kebabi-yemekcom.jpg',
      serving: '4',
      ingredients: [
        '500 gram kıyma',
        '2 adet orta boy soğan',
        '1/2 demet maydanoz',
        '2 diş sarımsak',
        '1 su bardağı bayat ekmek',
        '1 çay kaşığı tuz',
        '1 çay kaşığı karabiber',
        '1 çay kaşığı pul biber',
        '1 çay kaşığı kimyon',
        '3 adet patlıcan',
        '3 adet kiraz domates(boş yerlere eklemek için)',
        '1 yemek kaşığı domates salçası',
        '1 su bardağı sıcak su',
        '1 adet rendelenmiş domates',
        '1 çay kaşığı tuz',
        '1 çay kaşığı karabiber',
        '2 adet yeşil biber',
        '1 diş ezilmiş sarımsak',
      ],
      instructions:
        'Geniş bir kasede 500 gram kıymaya, 2 adet ince rendelenmiş kuru soğan, yarım demet maydanozu ilave edin. 2 diş ezilmiş sarımsak, 1 su bardağı ekmek kırıntısı ve 1er çay kaşığı tuz, pul biber, kimyon ve karabiber ekleyin. Sonra güzelce yoğurun ve yumurta büyüklüğünde kopardığınız köftelere yuvarlak şekil verin. İki parmak kalınlığında kestiğiniz 3 adet patlıcanla köfteleri birleştirin. Sırasıyla dizerek fırın kabına yerleştirin ve boş kalan yerleri kiraz domatesle doldurun. Sosu için, ayrı bir kapta 1 yemek kaşığı domates salçasıyla 1 su bardağı sıcak suyu karıştırın. Üzerine 1 adet rendelenmiş domates, 1er çay kaşığı tuz, karabiber ve son olarak 2 adet doğranmış yeşil biberle 1 diş ezilmiş sarımsak ekleyip tekrar karıştırın. Sosu ve 1 çay bardağı suyu patlıcan ve köftelerin üzerine gelecek şekilde gezdirin ve Önceden ısıtılmış 200 derece fırında tercihen turbo veya fanlı fırında 50-60 dakika kadar pişirin. Ev usulü, mis gibi fırında patlıcan kebabınız hazır, afiyet olsun!',
    },
  ];

  private dessertRecipes: any[] = [
    {
      title: 'Pastane Usulü Supangle',
      imgURL:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2019/09/pastane-usulu-supangle-onecikan-yeni.jpg',
      serving: '6',
      ingredients: [
        '1 litre süt',
        '6 yemek kaşığı şeker',
        '3 yemek kaşığı un',
        '2 yemek kaşığı kakao',
        '2 adetyumurt sarısı',
        '120 grambitter çikolata(iki paket)',
        '1 yemek kaşığı tereyağı veya margarin',
        '1/2 çay bardağı buzlu soğuk su',
        '2-3 dilimkakaolu kek',
      ],
      instructions:
        'Tencereye nişasta, un, şeker, kakao ve yumurta sarısını alın ve karıştırın. Yavaş yavaş sütü ilave edin. Topaklanmaması için güzelce karıştırın. Sürekli karıştırarak pişirin. Kıvamı koyulaşıp göz göz olunca kadar pişirin. Ocaktan alın ardından tereyağı ve çikolatayı ilave edin ve karıştırın. Son olarak soğuk suyu da ilave edin. Üzerinin kabuk tutmaması için soğuyana kadar ara ara karıştırın. Kuplara kakaolu kekleri paylaştırın. Üzerlerine supangleyeyi ekleyin ve buzdolabında soğutun. Ardından servis edin. Afiyetler olsun!',
    },
    {
      title: 'Kardelen Tatlısı',
      imgURL:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/10/kardelen-tatlisi-onecikan.jpg',
      serving: '4-5',
      ingredients: [
        '1 litre süt',
        '3 yemek kaşığı mısır nişastası',
        '3 yemek kaşığı un',
        '1 adet yumurta sarısı',
        '1,5 çay bardağı şeker',
        '80 gram beyaz çikolata',
        '1 paket krem şanti',
        '1/2 çay bardağı süt',
        '4 adet yumurta',
        '1 su bardağı toz şeker',
        '1 çay bardağı süt',
        '1 paket vanilya',
        '1 paket kabartma tozu',
        '2 su bardağı un',
        '3,5 su bardağı süt',
        '1 kutu sıvı krema',
        '3/4 çay bardağı toz şeker',
        '1 çay bardağı Hindistan cevizi',
        '50 gram fındık (ya da fıstık)',
        '50 gram fındık (ya da fıstık)',
      ],
      instructions:
        'İlk olarak muhallebisi için tencereye süt, nişasta, un, şeker, yumurta sarısı, alıp pürüzsüz olacak şekilde karıştırın. Göz göz oluncaya kadar pişirin. Pişen muhallebiyi ocaktan alın ve içerisine vanilya, beyaz çikolatayı ekleyip, çikolata eriyene kadar karıştıralım ve soğumaya bırakın. Soğuyan muhallebinin üzerine 1 paket krem şanti ve yarım çay bardağı süt ilave edip, mikserle 4-5 dakika çırpın. Keki ıslatmak için; süt, sıvı krema ve şekeri bir kapta karıştıralım ve kenarda bekletin. Keki için, yumurta ve şekeri çırpın. Sütü ekleyin. Un, kabartma tozu, vanilyayı eleyerek karışıma un kalmayacak şekilde yedirin. Yağlı kağıt serili borcama hamuru boşaltın. 170 derece önceden ısıtılmış alt üst ayar fırında, yaklaşık 25 dakika pişirin ve soğumaya bırakın. Soğuyan keki ortadan ikiye bölün. Kekin birini kek kalıbına yerleştirin.Süt ve sıvı krema karışımının yarısını kekin üzerine gezdirin. Muhallebinin yarısını da güzelce üzerine yayarak, düzleştirin,fındık ve fıstık içi serpin.Sonra ortadan böldüğümüz kekin diğer yarısını üzerine kapatın ve ayırdığınız süt-krema karışımını tekrar kekin üzerine gezdirin. Kalan muhallebiyi de kekin üzerine tamamen dökün ve güzelce düzleştirin. Hindistan cevizi serperek, kekin üzerini kaplayın.Buzdolabında bir gece ya da en az 7-8 saat beklettikten sonra, dilediğiniz şekilde süsleyerek servis yapabilirsiniz. Afiyet olsun.',
    },
  ];

  private allRecipes: any[] = [
    this.breakfastRecipes,
    this.mainCourseRecipes,
    this.dessertRecipes,
  ];

  constructor() {}

  getBreakfastRecipes() {
    return this.breakfastRecipes;
  }

  getMainCourseRecipes() {
    return this.mainCourseRecipes;
  }

  getDessertRecipes() {
    return this.dessertRecipes;
  }

  getAllRecipes(){
    return this.allRecipes;
  }

  addBreakfastRecipes(breakfastRecipe: any) {
    this.breakfastRecipes.push(breakfastRecipe);
  }

  addMainCourseRecipes(mainCourse: any) {
    this.mainCourseRecipes.push(mainCourse);
  }

  addDessertRecipes(dessertRecipe: any) {
    this.dessertRecipes.push(dessertRecipe);
  }
  
}
