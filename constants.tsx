import { Layout, BarChart3, Globe, GitMerge } from 'lucide-react';
import { Project, ServiceItem, ExperienceItem } from '@/types';

export const PROFILE = {
  name: "魚也是貓",
  title: "全端系統開發者 ＆ 流程優化師",
  tagline: "將模糊需求收斂為執行藍圖，打造穩健的商業系統",
  introShort: "你不需懂技術，也能順暢溝通。協助你釐清邏輯、收斂需求，並將想法轉化為穩定好用的數位工具，降低開發風險與溝通成本。",
  email: "s8306075@gmail.com",
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
    shortDesc: '解決行政資料散亂的痛點。集中管理固定作業與範本，降低查找時間與輸入錯誤，讓日常流程變簡單。',
    thumbnail: '/office-automation-2025.png',
    role: '系統架構設計與全端開發',
    timeline: '2025 (進行中)',
    heroHeadline: '讓資料易於調出，讓行政作業不再卡關',
    valueTags: ['降低新進人員門檻', '減少重複錯誤', '流程標準化'],

    goal: '解決「資料難找、格式不一」的行政痛點。建立一個集中化的查詢系統，讓同仁能快速調用正確的附件與範本，減少依賴口耳相傳或散亂的檔案。',
    outcome: '成功將固定作業流程標準化。資料查詢時間縮短，信件與資料輸入的錯誤率下降，新進員工也能透過系統輔助更快上手。',

    background: '行政團隊每天處理大量固定格式的信件與資料，過去依賴人工記憶或散落在各處的檔案，操作耗時且容易因版本不同而出錯，交接成本較高。',
    insight: '提升效率的關鍵不一定是全自動化，而是「在對的時間提供對的資訊」。只要能讓必要資料即時且正確地出現，就能解決大部分的卡關問題。',

    solutionStrategy: [
      { title: '建立單一信賴來源', desc: '將散落的資料集中管理，確保大家看到的都是最新、經過確認的版本，減少版本混亂。' },
      { title: '作業情境模組化', desc: '依照實際工作場景分類資料，協助使用者直覺地找到當下需要的範本與附件。' },
      { title: '欄位防呆機制', desc: '在系統中加入必要的欄位檢核，引導操作者輸入完整資訊，降低作業疏漏。' }
    ],

    coreFeatures: [
      { 
        title: '直覺式資料查詢', 
        desc: '不需記憶複雜路徑，可直接依作業類型或關鍵字篩選資料。透過標籤分類，快速縮小查找範圍。' 
      },
      { 
        title: '規範化作業欄位', 
        desc: '將 SOP 內化在系統欄位中，透過必填設定與格式限制，引導使用者輸入完整資訊。' 
      },
      { 
        title: '新人友善設計', 
        desc: '清楚的分類與說明欄位，讓不熟悉流程的新進員工也能依循介面提示找到對應文件，降低教育訓練門檻。' 
      }
    ],

    screenshots: [
      {
        src: '/office-automation-2025-1.jpg',
        label: "Smart Retrieval",
        title: "輸入關鍵字，馬上找到需要的檔案",
        desc: "不需要在層層資料夾中翻找，只需輸入關鍵字或點選分類標籤，系統即刻列出相關文件。將找資料的時間省下來，專注於更重要的行政判斷。",
        quote: "系統幫你記住檔案位置，你只需要記得「要找什麼」。"
      },
      {
        src: '/office-automation-2025-2.jpg',
        label: "Version Control",
        title: "清楚的版本歷程，不再擔心用錯舊檔",
        desc: "文件修訂是常態，但版本混亂容易造成失誤。系統清楚標示最新版本，並保留歷史修訂紀錄，讓團隊協作時能安心引用正確資訊，也能隨時回溯差異。",
        quote: "有了清晰的版本紀錄，每一次的引用都讓人感到安心。"
      }
    ],

    keyDecisions: [
      { 
        decision: '採用模組化架構', 
        alternatives: '考量過僅使用共用資料夾管理。',
        value: '雖然開發成本較高，但長遠來看，模組化能適應未來業務變更，且能提供資料夾無法做到的搜尋與關聯功能。' 
      },
      { 
        decision: '強制性範本管理', 
        alternatives: '考量過允許自由編輯內容。',
        value: '為了確保對外溝通的一致性，選擇鎖定核心內容，僅開放必要欄位編輯，有效減少因人為修改造成的格式錯誤。' 
      }
    ],

    future: [
      { title: '智能關聯推薦', desc: '分析操作習慣，主動推薦當下可能需要的相關文件。' },
      { title: '流程模板擴充', desc: '納入更多類型的行政作業，成為全公司的標準化工具。' },
      { title: '操作歷程分析', desc: '記錄使用軌跡，分析哪些環節最常卡關，作為優化依據。' }
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
    title: "個人投資紀錄後台系統",
    category: "Dashboard / 資料視覺化",
    shortDesc: "別讓投資紀錄變成一筆糊塗帳。集中管理交易與股利，自動計算損益，用直覺圖表輔助投資決策。",
    thumbnail: "/investment-dashboard-2023.png",
    role: "獨立全端開發與產品設計",
    role: "系統規劃、全端開發與介面設計",
    timeline: "2023",
    heroHeadline: "讓數據說話，投資決策不再憑感覺",
    valueTags: ["資產可視化", "被動收入管理", "決策輔助", "自動化計算"],

    goal: "解決 Excel 記帳難以維護且缺乏直覺圖表的痛點。建立一個能自動計算庫存、歷史損益，並能清晰呈現資產分布與現金股利趨勢的個人化後台。",
    outcome: "成功將繁瑣的記帳轉化為資產管理的利器。首頁即時呈現成本與損益，視覺化圖表讓資產狀況清晰可見，輔助長期投資佈局。",

    background: "許多投資人依賴 Excel 記帳，但隨著交易筆數增加，維護變得繁瑣，且難以即時產出能輔助決策的圖表。往往導致「只知道買了什麼，卻不清楚整體績效」。",
    insight: "記帳的重點不是「紀錄」本身，而是「回顧與決策」。系統負責處理繁瑣的計算，直接呈現能輔助判斷的趨勢與佔比。",

    solutionStrategy: [
      { title: "資料結構標準化", desc: "設計嚴謹的資料庫架構，確保每一筆買賣、股利都能被正確歸戶與計算，奠定數據分析的基礎。" },
      { title: "繁瑣計算自動化", desc: "將庫存更新、已實現/未實現損益的計算邏輯寫入系統。輸入交易後，系統自動完成所有後續運算。" },
      { title: "決策資訊視覺化", desc: "不只給數字，更給圖表。呈現資產趨勢與股利分佈，一眼看出投資組合的健康度。" }
    ],

    coreFeatures: [
      { title: "交易庫存自動同步", desc: "新增買賣紀錄後，系統自動推算剩餘庫存與平均成本，無需人工手動加減。" },
      { title: "歷史損益追蹤", desc: "保留每一筆操作的損益紀錄，便於回顧過往績效，檢討投資策略。" },
      { title: "股利被動收入管理", desc: "整合現金股利資訊，計算殖利率與年度累計收入，讓「被動收入」數據化。" },
      { title: "全方位資產儀表板", desc: "整合庫存分佈、損益走勢、股息成長等關鍵指標，提供資產總覽。" },
      { title: "隨身決策支援", desc: "RWD 響應式設計，無論用電腦或手機，都能掌握資產狀況。" }
    ],
    
    screenshots: [
      { 
        src: "/investment-dashboard-2023-1.png", 
        label: "Information Hierarchy",
        title: "資訊分層，先抓重點再看細節",
        desc: "投資數據繁雜，但決策需要清晰的腦袋。採用「由大到小」的視覺動線：上方置頂的 KPI 卡片協助快速掌握整體績效；下方的整合表格則列出個股的詳細成本、股利與報酬。這種層次分明的佈局，確保檢視資產時保有清晰的全局觀。",
        quote: "好的介面導航，是協助使用者在海量數據中，優先看到最重要的事。"
      },
      { 
        src: "/investment-dashboard-2023-2.png", 
        label: "Data Visualization",
        title: "一眼看懂資產全貌",
        desc: "首頁儀表板整合了總資產、損益與佔比圖表。捨棄了密密麻麻的表格，改用直覺的圓餅圖與趨勢線，在登入後能快速掌握目前的投資組合健康度。",
        quote: "讓數據說話，輔助做出更好的決策。"
      },
    ],

    keyDecisions: [
      { 
        decision: "圖表化損益", 
        alternatives: "曾考量僅以傳統表格呈現數據。",
        value: "讓數據「易於理解」。透過直覺圖表呈現資產收益模式，不再需要在一堆數字中找答案，決策更有效率。" 
      },
      { 
        decision: "自動試算股利", 
        alternatives: "曾考量保留手動輸入計算。",
        value: "將繁瑣計算交給系統。自動整合股利排程與殖利率趨勢，讓被動收入一目瞭然，為長期佈局提供堅實的數據支撐。" 
      }
    ],

    future: [
      { title: "即時股價串接", desc: "整合市場 API，讓損益估算能隨盤中股價動態更新。" },
      { title: "績效深度分析", desc: "加入年化報酬率與大盤比較功能，提供更客觀的績效評估。" },
      { title: "報表匯出功能", desc: "支援匯出為 PDF 或 Excel，方便進行線下備份或進階分析。" }
    ],

    techStack: [
      { name: "PHP", category: "Backend" },
      { name: "Laravel", category: "Backend" },
      { name: "ECharts", category: "Frontend" },
      { name: "Bootstrap", category: "Frontend" },
      { name: "MySQL", category: "Database" }
    ]
  },
  {
    id: 'crm-dispatch-system-2022',
    title: 'CRM 與派遣車輛任務後台系統',
    category: '內部管理系統',
    shortDesc: '告別 Excel 與人工排程的混亂。集中管理客戶與車隊資訊，協助調度流程更清晰、精準。',
    thumbnail: '/crm-dispatch-system-2022.png',
    role: '系統規劃、全端開發與介面設計',
    timeline: '2022',
    heroHeadline: '優化派遣流程，讓車輛調度清楚可控',
    valueTags: ['流程自動化', '資料一致性', '效率提升', '防錯機制'],

    goal: '解決傳統「人工比對、跨工具切換」的派車痛點。建立一套整合客戶管理、任務排程與文件生成的系統，確保資料流暢，減少重複作業。',
    
    outcome: '成功實現派車流程數位化。內勤作業效率提升，減少重複輸入與人工核對時間，派車單生成準確快速，營收成本一目瞭然。',

    background: '過去內勤需要在 Google Maps 查距離、Calendar 排行程、Excel 記資料，最後手打派車單。流程繁瑣且斷裂，派車量大時容易發生撞期或資料錯誤。',
    
    insight: '派車管理的痛點不在於「排程」，而在於「資料不互通」。當客戶、司機、行程資料能自動串聯，排程就是水到渠成的事。',
    
    solutionStrategy: [
      { 
        title: '資料源頭統一', 
        desc: '建立集中的資料庫，讓客戶與車輛資訊只需輸入一次，後續所有流程都能直接調用，減少重複輸入。' 
      },
      { 
        title: '作業介面整合', 
        desc: '將查詢、排程、檢核整合在同一個畫面。內勤不需要再開多個視窗切換，資訊一目瞭然。' 
      },
      { 
        title: '文件產出自動化', 
        desc: '系統根據排程資料，協助生成派車單、收據與報表。把時間花在確認與溝通，而不是花在打字與排版。' 
      }
    ],

    coreFeatures: [
      { title: '客戶關係管理 (CRM)', desc: '完整記錄客戶聯絡資訊與歷史行程，讓服務更貼心，再次叫車只需一鍵帶入。' },
      { title: '智慧車輛管理', desc: '掌握車輛與司機狀態，透過即時檢視可用資源，輔助派單決策。' },
      { title: '一鍵文件生成', desc: '自動產出派車單、收據與費用報表，格式統一且準確，提升專業度。' },
      { title: '視覺化調度行事曆', desc: '直覺的拖拉式排程介面，清楚呈現每日任務分佈，調度調整更靈活。' },
      { title: '衝突防呆偵測', desc: '系統協助把關，當發生時間重疊時即時提醒，降低人為疏漏風險。' }
    ],

    screenshots: [
      {
        src: '/crm-dispatch-system-2022-1.png',
        label: "Task Consolidation",
        title: "任務詳情一頁整合",
        desc: "派車最怕資訊漏看或來回切換視窗。系統將客戶備註、司機狀態與時間安排整合在單一介面，一眼就能掌握所有關鍵細節，讓調度決策更從容。",
        quote: "把零碎的資訊收攏，讓調度專注於決策而非找資料。"
      },
      {
        src: '/crm-dispatch-system-2022-2.png',
        label: "Conflict Detection",
        title: "預約衝突即時偵測",
        desc: "人工排單難免會有盲點，系統會在開單當下比對車輛行程，一旦發現時間重疊立即以視覺化方式發出警示。作為「第二雙眼睛」協助把關，守護服務品質。",
        quote: "讓系統成為助手，減少尷尬的排程失誤。"
      }
    ],

    keyDecisions: [
      { 
        decision: '正規化資料架構', 
        alternatives: '考量過繼續沿用 Excel 進行管理。',
        value: '為了長遠的資料價值，選擇建立嚴謹的關聯式資料庫。這確保了資料的一致性，避免了 Excel 常見的資料版本衝突問題。' 
      },
      { 
        decision: '衝突檢測邏輯', 
        alternatives: '考量過單純人工核對。',
        value: '將「檢查」的工作交給系統。系統協助偵測時間重疊，讓內勤能專注於更複雜的調度決策，而不是浪費眼力在找錯誤。' 
      }
    ],

    future: [
      { title: '司機端行動 App', desc: '延伸開發手機端介面，讓司機即時接收派單、回報狀態。' },
      { title: '路徑演算法優化', desc: '串接地圖服務，自動建議最佳路徑與預估時間，進一步提升派遣效率。' }
    ],

    techStack: [
      { name: 'Laravel', category: 'Backend' },
      { name: 'MySQL', category: 'Database' },
      { name: 'jQuery', category: 'Frontend' },
      { name: 'Bootstrap', category: 'Frontend' },
      { name: 'Google Maps API', category: 'Tools' }
    ]
  },
  {
    id: 'consulting-planning-architecture',
    title: '系統開發諮詢與規劃',
    category: '顧問服務 / 規劃',
    shortDesc: '把模糊的「想做什麼」，轉化為邏輯清晰的「執行藍圖」。在寫下第一行程式碼之前，先確保解決的是對的問題。',
    thumbnail: '/consulting-planning-architecture.jpg',
    role: '需求收斂與系統架構設計',
    timeline: 'Ongoing',
    heroHeadline: '不再走冤枉路。將模糊的商業構想，轉化為邏輯清晰的執行藍圖',
    valueTags: ['邏輯梳理', '需求收斂', '風險預判', '溝通橋樑'],

    goal: '解決「有想法但不知從何下手」的焦慮。很多時候，專案卡關不是技術問題，而是邏輯沒想通。協助將抽象的商業構想，收斂為邏輯自洽、開發團隊能順利執行的具體方案。',
    
    outcome: '獲得一份清晰可執行的開發藍圖。透過有邏輯的文件與溝通，在開發前就對專案的範疇、流程與可能風險有十足的把握，避免無謂的試錯成本。',

    background: '許多專案失敗，往往源於「以為自己想清楚了」。直到開發一半才發現流程矛盾、資料不通，導致大量的重工與預算浪費。這比技術難題更消耗資源。',
    
    insight: '系統開發就像蓋房子。沒有好的藍圖，再好的磚塊也蓋不出穩固的大樓。先慢下來把邏輯順好，後面才能快起來。',
    
    solutionStrategy: [
      { 
        title: '深度聆聽與問題定義', 
        desc: '不急著談技術，而是先聽懂商業目標。透過引導式問答，挖掘出沒想到的流程漏洞，把模糊的需求變具體。' 
      },
      { 
        title: '將抽象想法具象化', 
        desc: '透過情境模擬與邏輯推演，把腦中模糊的概念，轉化為雙方都能理解的具體情境。確保對「成品」的運作邏輯完全同步。' 
      },
      { 
        title: '完整文件記錄', 
        desc: '將討論結果轉化為結構化的文件。這不只是開發依據，更是屬於客戶的資產，確保未來的任何開發者都能快速進入狀況。' 
      }
    ],

    coreFeatures: [
      { title: '需求邊界收斂', desc: '協助區分「想要」與「需要」，切分出最小可行性產品 (MVP) 的範圍，讓專案能盡快落地。' },
      { title: '核心流程梳理', desc: '模擬使用者的操作路徑，預先發現流程中的斷點與矛盾，在開發前就解決掉大部分的邏輯問題。' },
      { title: '資訊架構整理', desc: '規劃資料該怎麼分類、怎麼流動，確保系統邏輯是通順的，不會越做越卡。' },
      { title: '開發藍圖與時程', desc: '將龐大的願景拆解成可執行的任務清單，提供合理的時程預估，讓進度可被追蹤。' },
      { title: '潛在風險預判', desc: '提前點出可能遇到的限制與瓶頸，讓您對未來的維護成本心裡有數。' }
    ],

    screenshots: [
      {
        src: '/consulting-planning-architecture-1.jpg',
        label: "Logic Alignment",
        title: "情境模擬與邏輯對焦",
        desc: "在討論階段，不直接畫複雜的圖表，而是透過真實的使用者情境（Scenario）進行推演。這能幫助找出那些「以為想通了，其實還卡住」的盲點，確保每個功能都有存在的必要性。",
        quote: "在寫下第一行 Code 之前，先解決掉大部分的邏輯矛盾。"
      },
      {
        src: '/consulting-planning-architecture-2.jpg',
        label: "Actionable Roadmap",
        title: "收斂後的執行藍圖",
        desc: "將龐大模糊的願景，拆解為一個個可執行、可驗收的具體任務。這份藍圖讓您知道第一步該做什麼、下一步該往哪走，消除對專案進度的焦慮感。",
        quote: "清晰的規劃，是消除專案焦慮最好的解藥。"
      }
    ],

    keyDecisions: [
      { 
        decision: '拒絕盲目開發', 
        alternatives: '考量過直接動手寫 Code 比較快。',
        value: '寫 Code 很快，改 Code 很慢。前期的思考時間，是為了節省後期十倍的修改成本。想清楚再做，才是最快的捷徑。' 
      },
      { 
        decision: '講聽得懂的人話', 
        alternatives: '考量過使用專業技術術語展現專業。',
        value: '專業不是用術語堆疊出來的，而是能把複雜的事情講簡單。確保您在過程中完全理解我們在做什麼，而不是被技術名詞轟炸。' 
      }
    ],

    future: [
      { title: '持續諮詢', desc: '在開發過程中提供諮詢，確保實作不偏離原本的規劃。' },
      { title: '階段性檢視', desc: '隨著業務發展，定期回頭檢視架構是否需要調整。' }
    ],

    techStack: [
      { name: 'Notion', category: 'Tools' },
      { name: 'Google Docs', category: 'Tools' },
      { name: 'Miro', category: 'Tools' },
      { name: 'Markdown', category: 'Tools' }
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