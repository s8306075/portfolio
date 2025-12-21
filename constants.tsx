import { Layout, BarChart3, Globe, GitMerge } from 'lucide-react';
import { Project, ServiceItem, ExperienceItem } from '@/types';

export const PROFILE = {
  name: "魚也是貓",
  title: "全端系統開發者 ＆ 流程優化師",
  tagline: "將模糊需求收斂為執行藍圖，打造穩健的商業系統",
  introShort: "你不需懂技術，也能順暢溝通。協助你釐清邏輯、收斂需求，並將想法轉化為穩定好用的數位工具，降低開發風險與溝通成本。",
  contactFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScsgTk6bvI5JeNXTEq8o3oarURW0i8LltcyASTl9a8172mZeQ/viewform?usp=sharing&ouid=117901482318143492061",
  social: {
    facebook: "https://www.facebook.com/xu.xin.yu.81110",
    instagram: "https://www.instagram.com/a121403287009/"
  },
  website: "https://portfolio-mocha-beta-81.vercel.app/" // For JSON-LD
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: '網站與品牌相關',
    description: '網站不只是好看，更是建立信任的起點。協助規劃清晰的資訊架構與流暢動線，讓訪客第一時間就能找到重點，提升品牌專業度與轉換率。',
    shortDescription: '讓網站成為累積信任的資產。透過清晰的資訊架構與專業設計，有效傳達品牌價值，降低客戶的認知門檻。',
    icon: Layout,
    features: ['客製化網站開發', '品牌形象網站', '單頁式 Landing Page / 行銷頁面']
  },
  {
    id: 's2',
    title: '系統整合與自動化',
    description: '別讓團隊的時間花在複製貼上。透過 API 串接與系統整合，讓資料在不同工具間自動流轉，消除人為失誤，讓營運流程像流水般順暢。',
    shortDescription: '消除重複的行政作業。讓資料自動流轉於不同工具之間，降低人為失誤風險，把時間還給核心業務。',
    icon: Globe,
    features: ['全端系統開發', 'API 串接與系統整合', '行政流程自動化', 'CRM / ERP 小型整合']
  },
  {
    id: 's3',
    title: '資料與決策支援',
    description: '停止憑感覺做決策。協助將散落在各處的數據清洗整理，轉化為直觀的戰情儀表板。讓您一眼看懂營運現況，用客觀數據輔助商業判斷。',
    shortDescription: '用客觀數據輔助商業判斷。將複雜資料轉化為直觀的儀表板，即時掌握營運脈動，決策不再憑感覺。',
    icon: BarChart3,
    features: ['Dashboard / 資料視覺化', '自動化報表生成', '數據整理與清洗']
  },
  {
    id: 's4',
    title: '規劃與需求導向',
    description: '開發最怕做出來不是你要的。在寫程式前，先協助你釐清邏輯、收斂需求，並產出具體的執行藍圖。做好風險預判，確保預算花在刀口上。',
    shortDescription: '在開發前先看清全貌。協助釐清邏輯與收斂需求，產出可執行的規劃藍圖，大幅降低專案走偏的風險。',
    icon: GitMerge,
    features: ['需求釐清與系統架構規劃', '流程與系統建議', '小型專案技術顧問']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'office-automation-2025',
    title: '行政資料管理系統',
    category: '內部工具開發',
    shortDesc: '資料秒找無負擔。建立集中查詢系統，終結查找混亂，將作業流程全面標準化。',
    thumbnail: 'https://picsum.photos/id/180/800/600',
    role: '系統架構設計與全端開發',
    timeline: '2025',
    heroHeadline: '資料秒找，行政作業效率翻倍',
    valueTags: ['資料秒定位', '行政零門檻', '管理標準化'],

    goal: '解決行政資料散亂、格式不一的痛點。透過集中化管理，確保正確文件隨手可得。',
    outcome: '實現行政作業標準化。大幅縮短翻找時間，新人無需訓練即可精準作業。',

    background: '資料散落且依賴口耳相傳，交接成本極高且易出錯。',
    insight: '效率源於「精準調度」，而非單純自動化。',

    solutionStrategy: [
      { title: '集中信賴來源', desc: '統一管理資料版本，消除團隊溝通資訊落差。' },
      { title: '嚴謹權限控管', desc: '建立分層權限與版本機制，確保資料安全與引用唯一性。' },
      { title: '內化作業規則', desc: '將規範內置於輸入欄位，從源頭杜絕行政疏漏。' }
    ],

    coreFeatures: [
      { title: '秒級精準檢索', desc: '關鍵字即刻定位文件，徹底節省資料翻找時間。' },
      { title: '權限與版本控管', desc: '資料存取控管並鎖定最新版本，防止錯誤引用與資料外洩。' },
      { title: '無痛交接設計', desc: '系統自帶清晰提示，新同仁能立即獨立作業。' }
    ],

    screenshots: [
      {
        src: 'https://picsum.photos/id/160/1024/768',
        label: "Search Efficiency",
        title: "檔案位置，系統幫你記",
        desc: "關鍵字即刻調用，告別深層資料夾。讓團隊專注決策而非翻找。",
        quote: "讓系統成為團隊的外部大腦。"
      },
      {
        src: 'https://picsum.photos/id/119/1000/600',
        label: "Data Integrity",
        title: "標準流程，內化於系統",
        desc: "引導式填寫確保資料正確，從源頭終結格式錯誤與漏填。",
        quote: "每一次引用，都建立在安心的基礎上。"
      }
    ],

    keyDecisions: [
      { 
        decision: '採用模組化架構', 
        alternatives: '考慮過僅用 Google Drive 管理。',
        value: '雖然開發較久，但強大的搜尋與關聯能力，能應對未來十年擴充。' 
      },
      { 
        decision: '鎖定核心範本', 
        alternatives: '考慮過開放自由編輯。',
        value: '為確保一致性，僅開放必要欄位，有效防止格式崩壞。' 
      }
    ],

    future: [
      { title: '行為數據分析', desc: '分析操作行為以預判流程瓶頸，主動提供流程優化建議。' },
      { title: '全流程自動生成', desc: '將更多行政作業模板化，達成端對端自動化。' }
    ],

    techStack: [
      { name: 'Laravel', category: 'Backend' },
      { name: 'MySQL', category: 'Database' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      { name: 'Nuxt.js', category: 'Frontend' },
      { name: 'Docker', category: 'DevOps' }
    ]
  },
  {
    id: "investment-dashboard-2023",
    title: "個人投資紀錄系統",
    category: "Dashboard / 數據視覺化",
    shortDesc: "終結手動算帳。自動運算庫存與損益，將複雜數據轉化為直覺的決策圖表。",
    thumbnail: "https://picsum.photos/id/48/800/600",
    role: "系統規劃、全端開發與介面設計",
    timeline: "2023",
    heroHeadline: "數據自動運算，投資決策不再憑感覺",
    valueTags: ["資產即時追蹤", "決策加速", "避免錯誤投資"],

    goal: "解決 Excel 維護困難且缺乏直觀圖表的痛點。自動化追蹤資產，實現透明化管理。 ",
    outcome: "掌握財富動態。一鍵產出績效分析，讓投資組合調整更有據可循。",

    background: "數據零碎，難以透過傳統記帳看清長期趨勢與風險佔比。 ",
    insight: "數據的真正價值在於「驅動決策」，而非單純記錄。 ",

    solutionStrategy: [
      { title: '結構化資料管理', desc: '嚴謹架構確保每筆買賣與股利精準歸戶，終結對帳地獄。' },
      { title: '邏輯自動化運算', desc: '內建庫存與損益運算，輸入交易即刻更新，告別手動計算。' },
      { title: '自動風險提示', desc: '設置預警機制與比例監控，當資產配置失衡時自動發出提醒。' }
    ],

    coreFeatures: [
      { title: '庫存成本自動更新', desc: '交易紀錄即時推算成本，確保帳務實時準確，無需人工對帳。' },
      { title: '自動風險提示機制', desc: '實時監控資產比例，失衡或波動過大時自動觸發風險提醒。' },
      { title: '量化股息管理', desc: '自動計算殖利率與年度累計收入，讓被動收入趨勢化。' },
      { title: '一站式視覺戰情室', desc: '整合損益、分佈等指標，提供 360 度資產健康檢查。' }
    ],

    screenshots: [
      { 
        src: "https://picsum.photos/id/1/1000/600", 
        label: "Visual Insight",
        title: "掌握全局，先抓重點",
        desc: "KPI 卡片讓今日績效一目瞭然。過濾雜訊，確保決策時保有全局觀。",
        quote: "好的介面能幫你優先看到最重要的事。"
      },
      { 
        src: "https://picsum.photos/id/20/1000/600", 
        label: "Risk Control",
        title: "視覺化你的風險權重",
        desc: "捨棄表格，用圓餅圖呈現資產分佈。即時判斷是否需要進行再平衡。",
        quote: "讓數據成為你最好的決策助手。"
      }
    ],

    keyDecisions: [
      { 
        decision: "數據視覺化優先", 
        alternatives: "考慮過僅以傳統表格呈現。",
        value: "提煉數據意義。透過趨勢線呈現收益模式，不再需要自己找答案。" 
      },
      { 
        decision: "全自動庫存更新", 
        alternatives: "考慮過保留部分手動操作。",
        value: "極致化效率。將繁瑣運算交給系統，人只需負責判斷調整方向。" 
      }
    ],

    future: [
      { title: "投資策略模擬", desc: "基於歷史數據進行策略回測，輔助模擬不同配置下的預期效果。" },
      { title: "績效基準對比", desc: "加入大盤比較功能，提供更客觀的績效評估指標。" }
    ],

    techStack: [
      { name: "PHP", category: "Backend" },
      { name: "Laravel", category: "Backend" },
      { name: "ECharts", category: "Frontend" },
      { name: "MySQL", category: "Database" }
    ]
  },
  {
    id: 'crm-dispatch-system-2022',
    title: 'CRM 與任務派遣系統',
    category: '內部管理系統',
    shortDesc: '整合客戶與車隊資訊，消除調度混亂。讓派車流程標準化、精準且可控。',
    thumbnail: 'https://picsum.photos/id/111/800/600',
    role: '系統規劃、全端開發與介面設計',
    timeline: '2022',
    heroHeadline: '調度零失誤，效率看得見',
    valueTags: ['派遣零衝突', '作業標準化', '財務自動對帳'],

    goal: '整合斷裂的工具，解決派車衝突與重複輸入。建立一站式調度中心，確保營運流暢。',
    outcome: '杜絕調度失誤。實現派車單自動產出，大幅縮短核對時間，營收數據準確無誤。',

    background: '內勤需在多個視窗切換操作，資訊不對稱導致效率低下且易出錯。',
    insight: '互通資訊是效率之母。資料對焦，調度便能從容精準。',
    
    solutionStrategy: [
      { title: '統一資料源頭', desc: '建立集中客戶與車輛庫，消除重複輸入，確保資訊一致性。' },
      { title: '派遣歷史分析', desc: '紀錄並分析歷史調度數據，作為未來運力配置與成本優化依據。' },
      { title: '產出流程自動化', desc: '自動產出派車單與財務報表，將內勤從打字排版中解放。' }
    ],

    coreFeatures: [
      { title: '一鍵調用歷史客戶', desc: '紀錄客戶偏好，再次叫車僅需數秒即可完成預約開單。' },
      { title: '智慧衝突預警機制', desc: '自動偵測時間重疊並警示，從源頭阻斷人為疏漏導致的品質下降。' },
      { title: '派遣歷史深度分析', desc: '整合歷史派車數據，產出效率報告，協助優化車隊調度策略。' },
      { title: '經營數據自動對帳', desc: '任務完成即同步費用，月底不再需要人工核對，經營狀況隨時可控。' }
    ],

    screenshots: [
      {
        src: 'https://picsum.photos/id/133/1000/600',
        label: "Process Control",
        title: "一頁掌控調度全局",
        desc: "整合備註、狀態與路徑。內勤無需切換分頁，即可掌握所有關鍵細節。",
        quote: "讓調度專注於決策，而非找資料。"
      },
      {
        src: 'https://picsum.photos/id/192/1000/600',
        label: "Risk Management",
        title: "守護品質的預警線",
        desc: "系統在開單當下自動偵測衝突並標註，確保每一趟服務都能準時達成。",
        quote: "讓系統成為助手，守護服務品質。"
      }
    ],

    keyDecisions: [
      { 
        decision: '關聯式資料設計', 
        alternatives: '曾考慮沿用 Excel 擴充。',
        value: '徹底解決資料遺漏與版本衝突，為長期數據分析打好地基。' 
      },
      { 
        decision: '內建自動檢核', 
        alternatives: '考慮過保留人工核對。',
        value: '將檢查交給系統，讓內勤專注於優化服務，效率顯著提升。' 
      }
    ],

    future: [
      { title: '雙向即時通知', desc: '司機端 App 與管理台即時同步，確保任務變更即刻通知，消除溝通斷層。' },
      { title: '智慧路徑優化', desc: '串接即時路況，自動建議最佳派遣路徑，降低油耗成本。' }
    ],

    techStack: [
      { name: 'Laravel', category: 'Backend' },
      { name: 'MySQL', category: 'Database' },
      { name: 'Bootstrap', category: 'Frontend' },
      { name: 'Google Maps API', category: 'Tools' }
    ]
  },
  {
    id: 'consulting-planning-architecture',
    title: '開發諮詢與規劃',
    category: '顧問服務 / 規劃',
    shortDesc: '想法轉藍圖。降低開發風險與成本，寫 Code 前先釐清邏輯，確保預算精準投放。',
    thumbnail: 'https://picsum.photos/id/3/800/600',
    role: '需求收斂與系統架構設計',
    timeline: '持續中',
    heroHeadline: '不再走冤枉路。將模糊構想，轉化為邏輯清晰的執行藍圖',
    valueTags: ['邏輯梳理', '開發減壓', '風險預判'],

    goal: '解決「不知從何下手」的焦慮。將商業願景收斂為可執行、可驗收的具體方案。',
    outcome: '拿回專案主導權。在開發前預見瓶頸，確保資源精準投放，避免預算空轉。',

    background: '許多開發失敗源於「邊做邊改」，導致流程矛盾與預算無效燃燒。',
    insight: '思考成本是最低的開發成本。慢下來想通，後面才能快起來。',
    
    solutionStrategy: [
      { title: '深度收斂核心問題', desc: '透過引導式問答挖掘潛在漏洞，把「想要」轉化為「需要」。' },
      { title: '情境具象對焦', desc: '模擬真實操作並預先檢測 80% 流程風險，確保邏輯 100% 同步。' },
      { title: '路徑階段拆解', desc: '將願景拆解為可執行的任務清單，讓開發者有據可循，專案不失焦。' }
    ],

    coreFeatures: [
      { title: 'MVP 範圍界定', desc: '協助切分最小可行性範圍，確保核心價值能快速落地測試。' },
      { title: '流程風險預檢', desc: '在開發前排除 80% 的邏輯衝突與架構風險，避免高昂重工成本。' },
      { title: '技術瓶頸預判', desc: '提前指出維護瓶頸，避免短期方案在未來變成長期負擔。' },
      { title: '結構化執行藍圖', desc: '產出具體的規格與路徑圖，消除團隊對進度與結果的焦慮。' }
    ],

    screenshots: [
      {
        src: 'https://picsum.photos/id/60/1000/600',
        label: "Logic Distillation",
        title: "在寫程式碼前先對齊",
        desc: "透過情境模擬找出「以為想通了」的盲點。確保開發出的每個功能都有其必要。 ",
        quote: "在寫程式碼前，先解決邏輯矛盾。"
      },
      {
        src: 'https://picsum.photos/id/96/1000/600',
        label: "Actionable Roadmap",
        title: "將焦慮化為具體藍圖",
        desc: "將模糊願景拆解為具體任務。讓你清楚每一步該做什麼，找回對專案掌控感。",
        quote: "清晰的規劃是專案焦慮的最佳解藥。"
      },
    ],

    keyDecisions: [
      { 
        decision: '堅持前期的思考投資', 
        alternatives: '考慮過直接開始寫 Code。',
        value: '改 Code 很貴。前期的邏輯對齊能節省後期十倍修改成本，這才是最快的捷徑。' 
      },
      { 
        decision: '白話翻譯技術架構', 
        alternatives: '考慮過使用純技術文檔交付。',
        value: '確保客戶完全理解規劃細節。專業在於把複雜變簡單，降低決策風險。' 
      }
    ],

    future: [
      { title: '決策優化與培訓', desc: '提供長期決策優化諮詢與技術培訓，協助團隊建立自主規劃能力。' },
      { title: '定期架構健檢', desc: '隨業務成長重新檢視系統體質，提供優化與重構建議。' }
    ],

    techStack: [
      { name: 'Notion', category: 'Tools' },
      { name: 'Miro', category: 'Tools' },
      { name: 'Mermaid.js', category: 'Tools' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: '2025 - Present',
    title: '全端開發與流程優化負責人',
    company: '企業內部專案',
    description: '解決行政效率瓶頸。主導辦公室自動化系統開發，從需求釐清到系統上線，成功改善繁瑣的作業流程，顯著降低錯誤率。'
  },
  {
    year: '2023',
    title: '全流程個人開發者',
    company: '個人專案開發',
    description: '解決數據管理痛點。獨立開發投資紀錄後台，專注於解決 Excel 難以維護的問題，實現資料自動化運算與視覺化。'
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: '系統開發專案',
    description: '解決調度混亂問題。開發 CRM 與派遣任務後台，整合資料庫與前端介面，將傳統人工派工轉型為數位化流程。'
  },
  {
    year: '2015 - 2021',
    title: 'Web Developer',
    company: '科技公司 / 新創團隊',
    description: '累積系統實戰經驗。參與多項客製化網站與後台建置，磨練了在不同商業邏輯下，打造穩定全端架構的能力。'
  }
];