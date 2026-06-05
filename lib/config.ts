const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, '');
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`.replace(/\/$/, '');
  }
  return 'https://portfolio-mocha-beta-81.vercel.app';
};

export const SITE_CONFIG = {
  url: getBaseUrl(),
  name: '魚也是貓',
  siteName: '魚也是貓',
  title: '魚也是貓 | 專業系統整合顧問 · 自動化流程與 CRM 軟體專家',
  description: '專業解決 Excel 數據混亂、建立 CRM 車輛派遣系統與行政流程自動化。協助個人創作者與企業縮減 90% 重複工時，把模糊的想法變成高效運行的系統實體。',
  keywords: [
    '系統整合諮詢',
    '自動化流程設計',
    'CRM 系統客製化',
    '車輛派遣系統開發',
    '提高工作效率方法',
    '軟體顧問',
    '行政流程優化',
    '數據看板設計',
    '魚也是貓',
    '客製化系統開發',
    '形象網站設計',
    '流程自動化顧問',
    '數據分析可視化',
    '個人品牌網站',
    'CRM 系統整合'
  ],
  ogImage: {
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: '魚也是貓',
  },
  social: {
    threads: 'https://www.threads.com/@a121403287009',
    facebook: "https://www.facebook.com/xu.xin.yu.81110",
    instagram: "https://www.instagram.com/a121403287009/"
  },
  googleForm: 'https://forms.gle/o3TsLXTMJGoHGWrM7',
  locale: 'zh_TW',
  type: 'website'
};
