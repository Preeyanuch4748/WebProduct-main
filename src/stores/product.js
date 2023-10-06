import { defineStore } from "pinia";
import { ref } from 'vue';
import { computed } from 'vue';

export const productStore = defineStore('product', () => {

    const load_product = computed(() => productList.value.length > 0 )
    
    const productList = ref([
    { 
    id: 1, name: 'ไอซ์ คาเฟ่ อเมริกาโน่', price:189 ,
    img: "https://www.starbucks.co.th/stb-media/2020/08/41.Iced-Caffe-Mocha1080.png",
    type: "Arabica Coffee",
    detail:'Caffè Americano (also known as Americano or American; Spanish: café americano, lit. ("American coffee") is a type of coffee drink prepared by diluting an espresso with hot water (typically 1:5), giving it a different flavor from traditionally brewed coffee.[citation needed] Its strength varies with the number of shots of espresso and amount of water added. The name is also spelled with varying capitalization and use of diacritics: e.g., café americano.'
    },{ 
    id: 2, name: 'ไอซ์ คาปูชิโน่',price:199,
    img: "https://www.starbucks.co.th/stb-media/2020/08/45.Iced-Cappuccino1080.png",
    type: "Robusta Coffee",
    detail:'A cappuccino is the perfect balance of espresso, steamed milk and foam.'
    },{ 
    id: 3, name: 'ไอซ์ คาเฟ่ มอคค่า',price:159,
    img: "https://www.starbucks.co.th/stb-media/2020/08/41.Iced-Caffe-Mocha1080.png",
    type: "Arabica Coffee",
    detail:'It is a variant of a latte, in the sense that it is often 1/3 espresso and 2/3 steamed milk.'
    },{ 
    id: 4, name: 'ไอซ์ เพียว มัทฉะ ลาเต้',price:169,
    img: "https://www.starbucks.co.th/stb-media/2020/08/81.Iced-Green-Tea-Latte1080.png",
    type: "Green Tea From Japan",
    detail:'Matcha is finely ground powder of specially grown and processed green tea leaves originating in China traditionally consumed in East Asia. It is mostly produced in Japan today. The green tea plants used for matcha are shade-grown for three to four weeks before harvest; the stems and veins are removed during processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine.'
    },{ 
    id: 5, name: 'ยูสุ แบล็ค ที',price:149,
    img: "https://www.starbucks.co.th/stb-media/2020/08/Yuzu-Black-Tea-1080x1080-1.png",
    type: "Arabica Coffee",
    detail:'A mixture of iced tea, lemon juice, refreshing with yuzu orange. Provides good refreshment during the day.'
    },{ 
    id: 6, name: 'ไอซ์ โกลเด้น มังกี้ ที ลาเต้',price:189,
    img: "https://www.starbucks.co.th/stb-media/2022/01/Winter2022_Web_Iced-golden-monkey-latte_GreenBG.jpg",
    type: "Arabica Coffee",
    detail:'Drip coffee is made by pouring hot water onto ground coffee beans, allowing it to brew. There are several methods for doing this, including using a filter. Terms used for the resulting coffee often reflect the method used, such as drip-brewed coffee, filtered coffee, or immersion-brewed coffee in general. Manually brewed drip coffee is typically referred to as pour-over coffee.[1][2] Water seeps through the ground coffee, absorbing its constituent chemical compounds, and then passes through a filter. The used coffee grounds are retained in the filter, while the brewed coffee is collected in a vessel such as a carafe or pot.'
    },{ 
    id: 7, name: 'ไอซ์ มัทฉะ ลาเต้',price:259,
    img: "https://plus.unsplash.com/premium_photo-1661756522906-5df7ee690868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGljZSUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    type: "Green Tea From Japan",
    detail:'Matcha is finely ground powder of specially grown and processed green tea leaves originating in China traditionally consumed in East Asia. It is mostly produced in Japan today. The green tea plants used for matcha are shade-grown for three to four weeks before harvest; the stems and veins are removed during processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine.'
    },{ 
    id: 8, name: 'มัทฉะ ลาเต้ ร้อน',price:239,
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWVuJTIwdGVhfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    type: "Green Tea From Japan Only",
    detail:'Matcha is finely ground powder of specially grown and processed green tea leaves originating in China traditionally consumed in East Asia. It is mostly produced in Japan today. The green tea plants used for matcha are shade-grown for three to four weeks before harvest; the stems and veins are removed during processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine.'
    },{ 
    id: 9, name: 'โฮจิชา ร้อน ',price:299,
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    type: "Hojicha Tea From Japan Only",
    detail:'Hōjicha (ほうじ茶, 焙じ茶, lit. "roasted tea") is a Japanese green tea. It is distinctive from other Japanese green teas because it is roasted in a porcelain pot over charcoal. It is roasted at 150 °C (302 °F) to prevent oxidation and produce a light golden colour, as opposed to other Japanese teas which are steamed. In general, the base of a hōjicha consists of leaves from the second harvest or after.'
    },{ 
    id: 10, name: 'ชาอู่หลง ร้อน',price:99,
    img: "https://images.unsplash.com/photo-1498604636225-6b87a314baa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxnZW5tYWljaGElMjB0ZWF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    type: "Oolong Tea",
    detail:'Oolong Tea simplified Chinese: 乌龙茶; traditional Chinese: 烏龍茶 (wūlóngchá, "dark dragon" tea) is a traditional semi-oxidized Chinese tea (Camellia sinensis) produced through a process including withering the plant under strong sun and oxidation before curling and twisting.'
    },
    ]);

    return {productList, load_product }

});