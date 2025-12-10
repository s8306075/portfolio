import { Layout, BarChart3, Globe, GitMerge } from 'lucide-react';
import { Project, ServiceItem, ExperienceItem } from '@/types';

export const PROFILE = {
  name: "魚也是貓",
  title: "全端系統開發者 ＆ 流程優化師",
  tagline: "聽得懂需求，整理出方向，做得出真正能用的工具",
  introShort: "不只是寫程式。我是協助你將混亂需求收斂為執行藍圖的獨立開發者，專注於打造邏輯清晰、穩健運行的自動化系統。",
  email: "s8306075@gmail.com",
  social: {
    facebook: "https://www.facebook.com/xu.xin.yu.81110",
    instagram: "https://www.instagram.com/a121403287009/"
  },
  website: "https://alexchen.dev" // For JSON-LD
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: '網站與品牌相關',
    description: '網站是您的數位門面，但不用把它想得太複雜。我協助您打造結構清晰、視覺專業的網站，不僅好看，更重要的是讓訪客能順暢地找到資訊，建立信任感。',
    shortDescription: '打造專業且好用的數位門面。我不只關注視覺，更在意資訊架構與動線，確保您的網站能有效傳遞價值，建立客戶信任。',
    icon: Layout,
    features: ['客製化網站開發', '品牌形象網站', '單頁式 Landing Page / 行銷頁面']
  },
  {
    id: 's2',
    title: '系統整合與自動化',
    description: '覺得日常作業很繁瑣？把重複的流程交給系統吧。我幫您串接各種數位工具（API），讓資料自動流轉，減少人為複製貼上的錯誤，讓團隊把時間花在更有價值的事情上。',
    shortDescription: '告別重複的行政作業。透過系統串接與自動化，讓資料在對的時間出現在對的地方，減少人為失誤，讓團隊運作更順暢。',
    icon: Globe,
    features: ['全端系統開發', 'API 串接與系統整合', '行政流程自動化', 'CRM / ERP 小型整合']
  },
  {
    id: 's3',
    title: '資料與決策支援',
    description: '不再憑感覺做決策。我協助您將散亂在 Excel 或各處的資料進行清洗與整理，轉化為直覺的儀表板，讓您能一眼看懂營運現況，發現潛在機會。',
    shortDescription: '讓散亂的資料說話。將複雜數據轉化為直覺的戰情儀表板，協助您客觀掌握營運脈動，做決策不再心慌。',
    icon: BarChart3,
    features: ['Dashboard / 資料視覺化', '自動化報表生成', '數據整理與清洗']
  },
  {
    id: 's4',
    title: '規劃與需求導向',
    description: '您不需要懂技術，只要告訴我您的困擾。我擅長將模糊的想法收斂成具體的執行藍圖。在動手開發前，我們先把邏輯理順，確保每一分預算都花在刀口上。',
    shortDescription: '不懂技術也能順暢溝通。我將您的模糊想法收斂為具體的執行藍圖，做好風險預判，確保專案能穩健落地。',
    icon: GitMerge,
    features: ['需求釐清與系統架構規劃', '流程與系統建議', '小型專案技術顧問']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'office-automation-2025',
    title: '行政資料管理系統',
    category: '內部工具開發',
    shortDesc: '解決行政資料散亂的痛點。集中管理固定作業與範本，大幅降低查找時間與輸入錯誤，讓日常流程變簡單。',
    thumbnail: '/office-automation-2025.png',
    role: '系統架構設計與全端開發',
    timeline: '2025',
    heroHeadline: '讓資料易於調出，讓行政作業不再卡關',
    valueTags: ['降低新進人員門檻', '減少重複錯誤', '流程標準化'],

    goal: '解決「資料難找、格式不一」的行政痛點。建立一個集中化的查詢系統，讓同仁能快速調用正確的附件與範本，不再依賴口耳相傳或散亂的檔案。',
    outcome: '成功將固定作業流程標準化。資料查詢時間大幅縮短，信件與資料輸入的錯誤率明顯下降，新進員工也能快速上手，行政團隊運作更順暢。',

    background: '行政團隊每天處理大量固定格式的信件與資料，過去依賴人工記憶或散落在各處的檔案，導致操作耗時且容易出錯，新人交接成本極高。',
    insight: '提升效率的關鍵不一定是全自動化，而是「在對的時間提供對的資訊」。只要能讓必要資料即時且正確地出現，就能解決 80% 的問題。',

    solutionStrategy: [
      { title: '建立單一信賴來源', desc: '將散落的資料集中管理，確保大家看到的都是最新、正確的版本，消除版本混亂。' },
      { title: '作業情境模組化', desc: '依照實際工作場景分類資料，讓使用者直覺地找到當下需要的範本與附件。' },
      { title: '防呆與引導機制', desc: '在系統中加入簡單的指引與檢核，讓操作者自然而然地完成正確步驟，降低學習負擔。' }
    ],

    coreFeatures: [
      { 
        title: '直覺式資料查詢', 
        desc: '不用記檔案路徑，直接依作業類型快速取得資料。支援標籤篩選與版本管理，找資料像 Google 一樣簡單。' 
      },
      { 
        title: '標準化作業引導', 
        desc: '將SOP內化在系統中，透過介面引導使用者完成固定流程，減少人為疏漏。' 
      },
      { 
        title: '新人友善設計', 
        desc: '內建流程指引與說明，讓新進員工能透過系統快速理解作業規範，大幅降低教育訓練成本。' 
      }
    ],

    screenshots: [
      {
        src: '/office-automation-2025-1.jpg',
        label: "Smart Retrieval",
        title: "直覺式快速查找，不再大海撈針",
        desc: "過去找一份文件要翻遍好幾層資料夾，現在只需要輸入關鍵字或點選標籤，系統就會幫你把相關資料篩選出來。把「找東西」的時間省下來，專注在真正重要的行政判斷上。",
        quote: "讓系統去記憶檔案位置，你只需要記得「你要找什麼」。"
      },
      {
        src: '/office-automation-2025-2.jpg',
        label: "Version Control",
        title: "多版本即時檢視，告別檔案混亂",
        desc: "文件修訂難免會有好幾個版本，但「最終版_v2」的混亂常讓人頭痛。我們設計了清晰的切換介面，讓你隨時能查看歷史紀錄、比對差異。確保團隊引用的永遠是正確資訊，不再發生「用到舊檔」的烏龍。",
        quote: "完整的修訂軌跡，讓每一次的引用都安心無虞。"
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
        value: '為了確保對外溝通的一致性，我們選擇鎖定核心內容，僅開放必要欄位編輯，有效杜絕了人為修改造成的錯誤。' 
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
    shortDesc: "別讓投資紀錄變成一筆糊塗帳。集中管理交易與股利，自動計算真實損益，用直覺圖表輔助您的投資決策。",
    thumbnail: "/investment-dashboard-2023.png",
    role: "獨立全端開發與產品設計",
    timeline: "2023",
    heroHeadline: "讓數據說話，投資決策不再憑感覺",
    valueTags: ["資產可視化", "被動收入管理", "決策輔助", "自動化計算"],

    goal: "解決 Excel 記帳難以維護且缺乏直覺圖表的痛點。建立一個能自動計算庫存、歷史損益，並能清晰呈現資產分布與現金股利趨勢的個人化後台。",
    outcome: "成功將繁瑣的記帳轉化為資產管理的利器。首頁即時呈現成本與損益，視覺化圖表讓資產狀況一目瞭然，有效輔助長期投資佈局。",

    background: "許多投資人依賴 Excel 記帳，但隨著交易筆數增加，維護變得極其繁瑣，且難以即時產出能輔助決策的圖表。往往導致「只知道買了什麼，卻不清楚整體績效」。",
    insight: "記帳的重點不是「紀錄」本身，而是「回顧與決策」。系統應該自動處理繁瑣的計算，直接呈現能輔助判斷的趨勢與佔比。",

    solutionStrategy: [
      { title: "資料結構標準化", desc: "設計嚴謹的資料庫架構，確保每一筆買賣、股利都能被正確歸戶與計算，奠定數據分析的基礎。 " },
      { title: "繁瑣計算自動化", desc: "將庫存更新、已實現/未實現損益的計算邏輯寫入系統。輸入交易後，系統自動完成所有後續運算。 " },
      { title: "決策資訊視覺化", desc: "不只給數字，更給圖表。透過 ECharts 呈現資產趨勢與股利分佈，讓使用者一眼看出投資組合的健康度。 " }
    ],

    coreFeatures: [
      { title: "交易庫存自動同步", desc: "新增買賣紀錄後，系統自動推算剩餘庫存與平均成本，無需人工手動加減。 " },
      { title: "歷史損益追蹤", desc: "完整保留每一筆操作的損益紀錄，便於回顧過往績效，檢討投資策略。 " },
      { title: "股利被動收入管理", desc: "自動整合現金股利資訊，計算殖利率與年度累計收入，讓「被動收入」看得見、算得準。 " },
      { title: "全方位資產儀表板", desc: "整合庫存分佈、損益走勢、股息成長等關鍵指標，提供上帝視角的資產總覽。 " },
      { title: "隨身決策支援", desc: "RWD 響應式設計，無論用電腦或手機，都能隨時掌握資產狀況，不錯過市場機會。 " }
    ],

    screenshots: [
      { 
        src: "/investment-dashboard-2023-1.png", 
        label: "Data Visualization",
        title: "一眼看懂資產全貌",
        desc: "首頁儀表板整合了總資產、損益與佔比圖表。我們捨棄了密密麻麻的表格，改用直覺的圓餅圖與趨勢線，讓投資者在登入的三秒內，就能掌握目前的投資組合健康度。",
        quote: "數據如果看不懂，就只是雜訊。我們讓數據說話，輔助你做出更好的決策。"
      },
      { 
        src: "/investment-dashboard-2023-2.png", 
        label: "Information Hierarchy",
        title: "資訊分層，先抓重點再看細節",
        desc: "投資數據繁雜，但決策需要清晰的腦袋。採用「由大到小」的視覺動線：置頂的 KPI 卡片讓你瞬間掌握整體績效；下方的整合表格則詳列了個股的成本、股利與報酬。這種層次分明的佈局，確保你在檢視資產時，始終保有清晰的全局觀。",
        quote: "好的介面導航，是讓你在海量數據中，第一眼就看到最重要的事。"
      },
    ],

    keyDecisions: [
      { 
        decision: "圖表化損益與股利", 
        alternatives: "曾考量僅以傳統表格呈現數據。",
        value: "讓數據「一眼即懂」。透過直覺圖表呈現資產收益模式，您不再需要在一堆數字中找答案，決策更精準、輕鬆。" 
      },
      { 
        decision: "自動化股利與殖利率試算", 
        alternatives: "曾考量保留手動輸入計算。",
        value: "將繁瑣計算交給系統。自動整合股利排程與殖利率趨勢，讓被動收入一目瞭然，為您的長期佈局提供最堅實的數據支撐。" 
      }
    ],

    future: [
      { title: "即時股價串接", desc: "整合市場 API，讓損益估算能隨盤中股價動態更新。 " },
      { title: "績效深度分析", desc: "加入年化報酬率與大盤比較功能，提供更客觀的績效評估。 " },
      { title: "報表匯出功能", desc: "支援匯出為 PDF 或 Excel，方便進行線下備份或進階分析。 " }
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
    shortDesc: '告別 Excel 與人工排程的混亂。集中管理客戶與車隊資訊，自動化派單流程，讓調度變得輕鬆又精準。',
    thumbnail: '/crm-dispatch-system-2022.png',
    role: '系統規劃、全端開發與介面設計',
    timeline: '2022',
    heroHeadline: '優化派遣流程，讓車輛調度清楚可控',
    valueTags: ['流程自動化', '資料一致性', '效率提升', '防錯機制'],

    goal: '解決傳統「人工比對、跨工具切換」的派車痛點。建立一套整合客戶管理、任務排程與文件生成的系統，確保資料流暢，減少重複作業。',
    
    outcome: '成功實現派車流程數位化。內勤作業效率提升約 40%，大幅減少重複輸入與人工核對時間，派車單生成準確快速，營收成本一目瞭然。',

    background: '過去內勤需要在 Google Maps 查距離、Calendar 排行程、Excel 記資料，最後手打派車單。流程繁瑣且斷裂，一旦派車量大，極易發生撞期或資料錯誤。',
    
    insight: '派車管理的痛點不在於「排程」，而在於「資料不互通」。當客戶、司機、行程資料能自動串聯，排程就是水到渠成的事。',
    
    solutionStrategy: [
      { 
        title: '資料源頭統一', 
        desc: '建立集中的資料庫，讓客戶與車輛資訊只需輸入一次，後續所有流程都能直接調用，杜絕重複輸入。' 
      },
      { 
        title: '作業介面整合', 
        desc: '將查詢、排程、檢核整合在同一個畫面。內勤不需要再開十幾個視窗切換，所有資訊一目瞭然。' 
      },
      { 
        title: '文件產出自動化', 
        desc: '系統根據排程資料，一鍵生成派車單、收據與報表。把時間花在確認與溝通，而不是花在打字與排版。' 
      }
    ],

    coreFeatures: [
      { title: '客戶關係管理 (CRM)', desc: '完整記錄客戶偏好與歷史行程，讓服務更貼心，再次叫車只需一鍵帶入。' },
      { title: '智慧車輛管理', desc: '掌握車輛與司機狀態，系統自動過濾可用車輛，避免衝突派單。' },
      { title: '一鍵文件生成', desc: '自動產出派車單、收據與費用報表，格式統一且準確，提升專業度。' },
      { title: '視覺化調度行事曆', desc: '直覺的拖拉式排程介面，清楚呈現每日任務分佈，調度調整更靈活。' },
      { title: '衝突防呆偵測', desc: '系統自動把關，當發生時間重疊或資源衝突時即時提醒，防止人為疏漏。' }
    ],

    screenshots: [
      {
        src: '/crm-dispatch-system-2022-1.png',
        label: "Task Consolidation",
        title: "任務詳情一頁整合",
        desc: "派車最怕資訊漏看或來回切換視窗。我們將客戶備註、司機狀態與時間安排整合在單一介面，讓你一眼掌握所有關鍵細節，調度決策更從容，不再手忙腳亂。",
        quote: "把零碎的資訊收攏，讓調度專注於決策而非找資料。"
      },
      {
        src: '/crm-dispatch-system-2022-2.png',
        label: "Conflict Detection",
        title: "預約衝突即時偵測",
        desc: "人工排單難免會有盲點，尤其在旺季最容易發生「撞期」意外。系統會在開單當下自動比對所有車輛行程，一旦發現時間重疊立即發出警示。這不只是防呆，更是為了守護你的服務信譽。",
        quote: "讓系統成為你的第二雙眼睛，杜絕尷尬的排程失誤。"
      }
    ],

    keyDecisions: [
      { 
        decision: '正規化資料架構', 
        alternatives: '考量過繼續沿用 Excel 進行管理。',
        value: '為了長遠的資料價值，我們選擇建立嚴謹的關聯式資料庫。這確保了資料的一致性，避免了 Excel 常見的資料版本衝突與孤兒資料問題。' 
      },
      { 
        decision: '衝突檢測邏輯', 
        alternatives: '考量過單純人工核對。',
        value: '將「檢查」的工作交給系統。系統自動偵測時間重疊，讓內勤能專注於更複雜的調度決策，而不是浪費眼力在找錯誤。' 
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
    shortDesc: '把模糊的「想做什麼」，轉化為邏輯清晰的「執行藍圖」。在寫下第一行程式碼之前，先確保我們解決的是對的問題。',
    thumbnail: '/consulting-planning-architecture.jpg',
    role: '技術諮詢與開發藍圖規劃',
    timeline: 'Ongoing',
    heroHeadline: '不再走冤枉路。將模糊的商業構想，轉化為邏輯清晰的執行藍圖',
    valueTags: ['邏輯梳理', '需求收斂', '風險預判', '溝通橋樑'],

    goal: '解決「有想法但不知從何下手」的焦慮。很多時候，專案卡關不是技術問題，而是邏輯沒想通。我的目標是協助你將抽象的商業構想，收斂為邏輯自洽、開發團隊能順利執行的具體方案。',
    
    outcome: '獲得一份清晰可執行的開發藍圖。透過有邏輯的文件與溝通，讓你在開發前就對專案的範疇、流程與可能風險有十足的把握，避免無謂的試錯成本。',

    background: '許多專案失敗，往往源於「以為自己想清楚了」。直到開發一半才發現流程矛盾、資料不通，導致大量的重工與預算浪費。這比技術難題更可怕。',
    
    insight: '系統開發就像蓋房子。沒有好的藍圖，再好的磚塊也蓋不出穩固的大樓。先慢下來把邏輯順好，後面才能快起來。',
    
    solutionStrategy: [
      { 
        title: '深度聆聽與問題定義', 
        desc: '我不會一開始就談技術，而是先聽你的商業目標。透過引導式問答，挖掘出你沒想到的流程漏洞，把模糊的需求變具體。' 
      },
      { 
        title: '將抽象想法具象化', 
        desc: '透過情境模擬與邏輯推演，把腦中模糊的概念，轉化為雙方都能理解的具體情境。不急著畫圖或寫規格，而是確保我們對「成品」的運作邏輯完全同步。' 
      },
      { 
        title: '完整文件記錄', 
        desc: '將討論結果轉化為結構化的文件。這不只是開發依據，更是屬於你的資產，確保未來的任何開發者都能快速進入狀況。' 
      }
    ],

    coreFeatures: [
      { title: '需求邊界收斂', desc: '幫你區分「想要」與「需要」，切分出最小可行性產品 (MVP) 的範圍，讓專案能盡快落地。' },
      { title: '核心流程梳理', desc: '模擬使用者的操作路徑，預先發現流程中的斷點與矛盾，在開發前就解決掉 80% 的邏輯問題。' },
      { title: '資訊架構整理', desc: '規劃資料該怎麼分類、怎麼流動，確保系統邏輯是通順的，不會越做越卡。' },
      { title: '開發藍圖與時程', desc: '將龐大的願景拆解成可執行的任務清單，提供合理的時程預估，讓進度可被追蹤。' },
      { title: '潛在風險預判', desc: '提前點出可能遇到的限制與瓶頸，讓你對未來的維護成本心裡有數。' }
    ],

    screenshots: [
      {
        src: '/consulting-planning-architecture-1.jpg',
        label: "Logic Alignment",
        title: "情境模擬與邏輯對焦",
        desc: "在討論階段，我們不直接畫複雜的圖表，而是透過真實的使用者情境（Scenario）進行推演。這能幫助我們找出那些「以為想通了，其實還卡住」的盲點，確保每個功能都有存在的必要性。",
        quote: "在寫下第一行 Code 之前，先解決掉 80% 的邏輯矛盾。"
      },
      {
        src: '/consulting-planning-architecture-2.jpg',
        label: "Actionable Roadmap",
        title: "收斂後的執行藍圖",
        desc: "我們將龐大模糊的願景，拆解為一個個可執行、可驗收的具體任務。這份藍圖讓你知道第一步該做什麼、下一步該往哪走，消除對專案進度的焦慮感。",
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
        value: '專業不是用術語堆疊出來的，而是能把複雜的事情講簡單。我確保你在過程中完全理解我們在做什麼，而不是被技術名詞轟炸。' 
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
    description: '主導辦公室自動化系統開發。負責前後端架構設計、需求釐清與溝通，成功導入系統並顯著提升行政效率。'
  },
  {
    year: '2023',
    title: '全流程個人開發者',
    company: '個人專案開發',
    description: '獨立開發個人投資紀錄後台系統，專注於資料結構設計與視覺化圖表實作，解決實際的記帳痛點。'
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: '系統開發專案',
    description: '開發 CRM 與派遣車輛任務後台系統。負責資料庫規劃、後端邏輯與前端介面整合，優化了傳統派工流程。'
  },
  {
    year: '2015 - 2021',
    title: 'Web Developer',
    company: '科技公司 / 新創團隊',
    description: '累積多年全端開發經驗，參與多項客製化網站與後台系統建置。打下紮實的 PHP/Laravel 與 RWD 前端基礎。'
  }
];