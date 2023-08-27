import { createContext, useState } from 'react';

export const DataContext = createContext();

export const heroData = [
    {
        id: '1',
        nlabel: 'Nama',
        name:'Telkom Indonesia',
        tlabel: 'Judul',
        title: 'Telkom',
        dlabel: 'Deskripsi',
        description: 'Dunia di Tanganmu',
        imglabel: 'Gambar',
        image: 'https://source.unsplash.com/700x350/?man',
        route:'',
    },
];

export const contentData = [
    {   
        id: '1',
        tlabel:'Judul/Nama',
        title: 'Judul Postingan mu',
        slabel: 'Anak Judul',
        subtitle: 'Hutan',
        dlabel: 'Deskripsi',
        description: 'Hutan adalah sebuah lahan lapang yang didominasi oleh pepohonan yang banyak dan menjadi ...',
        rlabel: 'link destinasi',
        route: '#',
        image: 'https://source.unsplash.com/random/500x400/?forest',
        imglabel: 'Gambar 1'
    },
    {   
        id: '2',
        tlabel:'Judul/Nama',
        title: 'Judul Postingan mu',
        slabel: 'Anak Judul',
        subtitle: 'Pantai',
        dlabel: 'Deskripsi',
        description: 'Pantai adalah wilayah perbatasan antara daratan dengan lautan. Pantai terdiri dari pasir ...',
        rlabel: 'link destinasi',
        route: '#',
        image: 'https://source.unsplash.com/random/500x400/?beach',
        imglabel: 'Gambar 2'
    },
    {   
        id: '3',
        tlabel:'Judul/Nama',
        title: 'Judul Postingan mu',
        slabel: 'Anak Judul',
        subtitle: 'Galaksi',
        dlabel: 'Deskripsi',
        description: 'Galaksi adalah salah satu yang terbesar hal di alam semesta. Mereka begitu besar sehingga...',
        rlabel: 'link destinasi',
        route: '#',
        image: 'https://source.unsplash.com/random/500x400/?galaxy',
        imglabel: 'Gambar 3'
    }
];

export const footerData = [
    {   
        id: '1',
        tlabel:'Tentang kita',
        title: 'About Us',
        dlabel: 'Deskripsi',
        description: 'PT Telkom Indonesia (Persero) Tbk (Telkom) adalah Badan Usaha Milik Negara (BUMN) yang bergerak di bidang jasa layanan teknologi informasi dan komunikasi (TIK) dan jaringan telekomunikasi di Indonesia.',
        clabel:'Kontak',
        contact: 'Contact Us',
        hlabel: 'Nama Alamat',
        home: 'Alamat Perusahaan',
        addrlabel: 'Isi Alamat',
        address: 'Kawasan The Telkom Hub, Gedung Telkom Landmark Tower II, lantai.39, Jl. Jenderal Gatot Subroto Kav. 52, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, Jakarta, Indonesia 12710',
        rlabel: 'Telepon',
        route: '0812xxxxxxxx',
        elabel: 'Email',
        email: 'farizabqarillahi@gmail.com',
    },
];

export const socialLinks = [
    {
        id: '1',
        route: 'https://www.twitter.com',
        label: 'Twitter'
        },
    {
        id: '2',
        route: 'https://www.instagram.com',
        label: 'Instagram'
        },
    {
        id: '3',
        route: 'https://www.facebook.com',
        label: 'Facebook'
        },
    {
        id: '4',
        route: 'https://www.linkedin.com',
        label: 'Linkedin'
        },
    {
        id: '5',
        route: 'https://www.gmail.com',
        label: 'Gmail'
        },
];

export function SetListData(){
    // Untuk menyimpan data yang diinput user
    const [data, setData] = useState({
        hero: heroData,
        content: contentData,
        footer: footerData,
        social: socialLinks
    });
    return { data, setData }
}


export function SetToFunction(){
    // Untuk toggle button yang menampilkan sidebar
    const [sidebarVisible, setSidebarVisible] = useState(true);
    // Untuk handleHeroSectionClick memilih template hero section
    const [HeroSection, setHeroSection] = useState(1);
    // Untuk handleContentSectionClick memilih template content marketing section
    const [ContentSection, setContentSection] = useState(1);
    // Untuk handleFooterSectionClick memilih template content marketing section
    const [FooterSection, setFooterSection] = useState(1);
    // Untuk menampilkan hero input sidebar ketika hero section di klik
    const [HeroVisible, setHeroVisible] = useState();
    // Untuk menampilkan content marketing input ketika content marketing di klik
    const [ContentVisible, setContentVisible] = useState();
    // Untuk menampilkan footer input ketika footer di klik
    const [FooterVisible, setFooterVisible] = useState();

        return { 
            sidebarVisible, setSidebarVisible,
            HeroSection, setHeroSection,
            ContentSection, setContentSection,
            HeroVisible, setHeroVisible,
            ContentVisible, setContentVisible,
            FooterVisible, setFooterVisible,
            FooterSection, setFooterSection,
        };
    }
