> Depends_on: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) (全局規範)

## 色彩系統

### Primary · 主色系統

**Primary-01 · 主色：斧鉞冷鋼**

- **色相 & 色相偏移：** Cool Gray，藍偏移，Hue 215–225°，零暖偏移
- **明度區間 & 飽和度區間：** L 55–72，S 5–10%
- **應用場景：** 主標題文字、Logo 字形、切削幾何框架線、主要圖示——出現時必須帶方向性張力，禁止用於填滿封閉面積
- **範例：** `#8C949E`（標準）、`#9DA6B0`（亮版，用於強調幾何邊緣或高光細節）
- **無障礙強制約束：** 置於 Bg-01 `#0A0C0F`，對比度 ≥ 7:1（AAA）

### Secondary · 次色系統

**Secondary-01 · 次色：鑽地苔綠**

- **色相 & 色相偏移：** Desaturated Fog Green（脫飽和霧綠），Hue 145–155°
- **明度區間 & 飽和度區間：** L 38–48，S 18–26%（低飽和有機感）
- **應用場景：** 局部裝飾線跡、Tag 標籤、能量脈衝層裝飾元件、分隔線點綴——必須搭配 An-04 幾何生長，禁止靜態色塊呈現
- **範例：** `#3D5C47`（標準）、`#4A6E56`（亮版，用於 Hover 態標籤或折線前沿）
- **無障礙強制約束：** 禁止單獨作為正文底色；搭配深黑背景（Bg-01）時確保視覺層次明確

### Txt · 文字 / 中性色系統

**Txt-01 · 標題用色（最高能量密度文字層）**

- **色相 & 色相偏移：** Near-white，冷白偏銀，非純白，Hue 220°
- **明度區間 & 飽和度區間：** L 92，S 5%
- **應用場景：** H1–H3 標題，導覽列 brand name，卡片標題，所有需要最高文字對比的場景
- **範例：** `#E8EBF0`
- **無障礙強制約束：** 搭配 Bg-01（`#0A0C0F`）對比度 ≥ 15:1（AAA）

**Txt-02 · 副標題用色**

- **色相 & 色相偏移：** Cool Gray，中調冷灰，Hue 220°
- **明度區間 & 飽和度區間：** L 68，S 6%
- **應用場景：** 副標題、說明段落首句、卡片副文、導覽錨點常態
- **範例：** `#A8ADB8`
- **無障礙強制約束：** 搭配 Bg-01 對比度 ≥ 7.5:1（AAA）

**Txt-03 · 內文用色**

- **色相 & 色相偏移：** Cool Gray，低調銀灰，Hue 220°
- **明度區間 & 飽和度區間：** L 50，S 7%
- **應用場景：** 主要段落文字、卡片描述文、步驟說明
- **範例：** `#787E8C`
- **無障礙強制約束：** 搭配 Bg-01 對比度 ≥ 4.8:1（AA ✓）

**Txt-04 · 說明 / 禁用 / 標籤色**

- **色相 & 色相偏移：** Cool Gray，Hue 218°
- **明度區間 & 飽和度區間：** L 42–46% / S 8–12%
- **應用場景：** Caption 說明文字、DM Mono 標籤、禁用態文字、頁尾版權文字
- **範例：** `#626B75`
- **無障礙強制約束：** 與 Bg-01 (#0A0C0F) 達成 ≥ 4.1 : 1

**Txt-05 · 高亮文字（電焊橙強調）**

- **色相 & 色相偏移：** Orange，等同 Accent-01（電焊弧光橙），Hue 25–28°
- **明度區間 & 飽和度區間：** L 45–50，S 85–92%
- **應用場景：** 關鍵詞強調、連結高亮、數字強調
- **範例：** `#D4621A`
- **無障礙強制約束：** 僅搭配 ≥ 18px Bold 使用；不得作為大面積文字色

### Bg · 背景 / 容器系統

**Bg-01 · 底層背景**

- **色相 & 色相偏移：** Near-black，極微藍黑偏移，Hue 220°
- **明度區間 & 飽和度區間：** L 5–7，S 8–12%
- **應用場景：** 全站基調底色，佔比 90%
- **範例：** `#0A0C0F`
- **無障礙強制約束：** 搭配內文用色，對比度 ≥ 4.5:1

**Bg-02 · 層次容器**

- **色相 & 色相偏移：** Near-black，冷深灰，Hue 218°
- **明度區間 & 飽和度區間：** L 10–13，S 7–10%
- **應用場景：** 服務卡片、作品卡片、區塊容器——透過 Mat-02 流向玻璃帶折射位移
- **範例：** `#13171C`

### Line · 線條 / 邊框系統

**Line-01 · 靜態邊框**

- **色相 & 色相偏移：** Cool Gray，極微藍調，Hue 218°
- **明度區間 & 飽和度區間：** L 16–20，S 8–12%
- **應用場景：** 常態分隔線、卡片邊框、輸入框邊框——必須帶方向性，禁止純水平裝飾線
- **範例：** `#1F252C`
- **無障礙強制約束：** 作為表單邊框時，與背景對比度 ≥ 3:1

**Line-02 · 交互態邊框**

- **色相 & 色相偏移：** Orange，Hue 25–32°
- **明度區間 & 飽和度區間：** L 65–72，S 82–90%
- **應用場景：** Hover、Focus、Active 態邊框——帶 1px 彩虹色散位移效果
- **範例：** `#E8702A`

### Accent · 點綴 / 轉化色

**Accent-01 · 電焊弧光橙**

- **色相 & 色相偏移：** Orange-White，高明度白熱感，Hue 25–32°
- **明度區間 & 飽和度區間：** L 68–80，S 80–95%
- **應用場景：** 主要 CTA 按鈕、能量匯聚點光暈、An-02 弧光頻閃——必須是動態存在
- **範例：** `#E8702A`
- **無障礙強制約束：** CTA 文字使用 `#0A0C0F`，對比度 ≥ 7:1（AAA）

**Accent-02 · 極高壓冰冷白**

- **色相 & 色相偏移：** Cool-White，Hue 215°
- **明度區間 & 飽和度區間：** L 95% - 98%， S 4% - 6%
- **範例：** `#F0F4FF`
- **應用場景：** 卡片或組件頂部 1px 的封閉線、玻璃邊緣厚度感、極微小裝飾點
- **無障礙強制約束：** 與背景對比度 ≥ 15:1

### 狀態色

| **狀態代碼 & 名稱** | **色相 (Hue)** | **明度 (L) & 飽和度 (S)** | **建議 Hex** | **對比度 (與背景 #0A0C0F)** |
| --- | --- | --- | --- | --- |
| **State-01 · 活化綠** | 162° (冷翠) | L 68% / S 60% | **#5ECEA0** | 12.8:1 (絕對辨識) ✅ |
| **State-02 · 枯金黃** | 45° (冷金) | L 64% / S 75% | **#E8C55F** | 12.5:1 (白熾能量) ✅ |
| **State-03 · 斷裂紅** | 2° (氧化紅) | L 58% / S 70% | **#ED5E5E** | 11.2:1 (絕對警告) ✅ |
| **State-04 · 淬火藍** | 210° (鋼靛) | L 62% / S 55% | **#6EA2D4** | 11.9:1 (穩健定型) ✅ |

## 結構基因

### 字研系統

**字體：**

- **中文標題：** Noto Serif TC——稜角分明且筆畫端點具備「切削感」，展現出剛毅、精準的架構底蘊
- **中文內文：** Noto Sans TC 400——極細線條營造出輕盈的流動感，確保長篇資訊的閱讀具備呼吸餘裕
- **英文 / 數字主體：** DM Mono——等寬字體模擬精密儀器的刻度感，建立技術邏輯的嚴密性與可信度
- **英文標題輔助：** Editorial New Italic——有機的斜體筆畫具備柔性張力，用以平衡純技術線條的生硬感，增添品牌的人文厚度

**層級邏輯（基準 16px）：**

| **層級** | **字體 (Font Family)** | **桌面尺寸** | **字重 (Weight)** | **行高 (L-Height)** | **字色預設** |
| --- | --- | --- | --- | --- | --- |
| **Display** | Noto Serif TC | 64–80px | 500 (Medium) | 1.1 | Txt-01 `#E8EBF0` |
| **H1** | Noto Serif TC | 48–56px | 400 (Regular) | 1.2 | Txt-01 `#E8EBF0` |
| **H2** | Noto Serif TC | 32–40px | 400 (Regular) | 1.3 | Txt-01 `#E8EBF0` |
| **H3** | Noto Serif TC | 22–26px | 500 (Medium) | 1.4 | Txt-01 `#E8EBF0` |
| **Body** | Noto Sans TC | 16–17px | 300 (Light) | 1.8 | Txt-03 `#8A919F` |
| **Caption** | DM Mono | 13px | 400 (Regular) | 1.6 | Txt-04 `#626B75` |

**呼吸比例：** 段落間距字級 × 1.5；區塊間距字級 × 5–7；Display 下方強制 ≥ 40px

**跨語系對齊協議：** 英文基線對齊中文底部；數字一律 DM Mono tabular-nums；禁止中文數字於 UI 組件；中英 Display 字間距 0.02em

### 幾何系統

- **圓角半徑**
    - 系統級邊框 — 4px：適用於所有卡片容器、輸入框 (Input)、下拉選單 (Dropdown)。
    - 資訊級邊框 — 6px：適用於狀態標籤 (Status Tag)、類別分類 (Category Chip)。
    - 破局級邊框 — 非對稱切角 (2px / 8px)：僅限於「主按鈕 (Primary Button)」。
    - 核心邏輯邊框 — 0px：適用於 Ghost Button、底層分隔線。
- **線條粗細：** 0.5px 在延伸末端應配合 `mask-image` 進行 **80% 的透明度衰減**（精密幾何折線）、1px（主要分隔線）、2px（能量匯聚點強調邊框）
- **幾何動勢原則：** 所有非純分隔的幾何線條必須帶方向性——使用斜切（45°）、非對稱延伸、或缺角（「正在成形」）。所有矩形框線優先使用缺角而非完整閉合，缺角的方向必須**指向「視覺重心（如 CTA）」或「下一個區塊的切入點」**。
- **45° 切角矩形**——clip-path 切角並疊加 0.5px Opt-05 掠射冷光（切面反光）；Mo-03 刻度延伸進場（框線從缺口開始生長），幾何勢動層 0.5px 亮點緩慢沿線偏移。
- **非對稱缺角框線**——1–2 個角缺口，邊緣伴隨 An-01 場域呼吸作用（opacity 微幅起伏）±0.2px 的邊界顫震（Boundary Jitter）；亮點（0.5px）在線條上移動時，經過缺口時觸發 Opt-02 熔接微閃（跳火現象）。
- **45°/90° 精密折線群**——0.5px 線條於 45°/90° 轉折處疊加 2px 節點應力暈影（Blur 1px）向 CTA 方向延伸；An-04 斷續生長動效（Staccato，轉折停頓 40ms 後爆發噴射）；禁止有機曲線。
- **極細座標軸交叉（+）**——1px 線條，設定 1px 景深位移（比背景噪點深）；Mo-03 延伸進場（水平先，垂直後），常態幾何勢動層 0.5px 亮點偏移，捲動時產生 1% 反向位移（狙擊鏡感）。
- **孤立浮點陣列**——2px 圓點，以區塊中心為引力點進行向心/離心運動；各自錯開 delay 的 Mo-02 漂升，產生微小的向心或離心運動，並隨能量脈衝同步透明度閃爍（粒子受激狀態），構成能量脈衝層基底。

### 幾何系統（視覺語彙）

- **45° 切角矩形**——clip-path 切角並疊加 0.5px Opt-05 掠射冷光（切面反光）；Mo-03 刻度延伸進場（框線從缺口開始生長），幾何勢動層 0.5px 亮點緩慢沿線偏移。
- **非對稱缺角框線**——1–2 個角缺口，邊緣伴隨 An-01 場域呼吸作用（opacity 微幅起伏）±0.2px 的邊界顫震（Boundary Jitter）；亮點（0.5px）在線條上移動時，經過缺口時觸發 Opt-02 熔接微閃（跳火現象）。
- **45°/90° 精密折線群**——0.5px 線條於 45°/90° 轉折處疊加 2px 節點應力暈影（Blur 1px）向 CTA 方向延伸；An-04 斷續生長動效（Staccato，轉折停頓 40ms 後爆發噴射）；禁止有機曲線。
- **極細座標軸交叉（+）**——1px 線條，設定 1px 景深位移（比背景噪點深）；Mo-03 延伸進場（水平先，垂直後），常態幾何勢動層 0.5px 亮點偏移，捲動時產生 1% 反向位移（狙擊鏡感）。
- **孤立浮點陣列**——2px 圓點，以區塊中心為引力點進行向心/離心運動；各自錯開 delay 的 Mo-02 漂升，產生微小的向心或離心運動，並隨能量脈衝同步透明度閃爍（粒子受激狀態），構成能量脈衝層基底。

## **物質形態系統**

### 維度一：材質（5 種協議）

#### Mat-01｜鍛造方向拉絲（Forged Directional Grain）

- **[物理模擬詞彙]** 斧鉞鍛造力跡——分子受壓後的物理重排。表面拉絲非裝飾，而是各向異性（Anisotropic）的切割動勢殘留。
- **[視覺邏輯]** 透過 CSS `repeating-linear-gradient` 佈署 2px 間距的水平`linear-gradient` 畫出帶有 0.5px 模糊邊界的線條，並疊加 `mask-image: radial-gradient` 底紋，強制拉絲呈現「中間實、兩端虛」的受力分佈。拉絲極細線邊緣鎖定 1% 的 `contrast(1.1)` 強化邊界剛性。將拉絲紋理置於寬度 120% 的偽元素（::after），透過 `transform: translateX()` 執行滑鼠聯動以補償位移缺口。高亮點偏移倍率鎖定為 1:1.2，打破靜態平衡。滾動視差採用 `will-change: transform` 提升至 GPU 合成層。局部區塊將方向調整為 -5° 以激發更強視覺動勢，密度根據場域能量嚴格控制在 3–6% 區間。
- **[參數]**
    - line-gap: 4px
    - line-opacity: 3–6%
    - direction: 0deg（局部 -5deg）
    - colour: #9DA6B0（亮）至 #0A0C0F（暗）
    - mix-blend-mode: soft-light
    - parallax-engine: `transform: translate3d()` (Factor: 0.05)
    - micro-diffraction: contrast(1.1)
    - buffer-width: 120% (for parallax compensation)

#### Mat-02｜流向折射玻璃（Flowing Refractive Glass）

- **[物理模擬詞彙]** 流動狀態中凝固的厚玻璃——有可感的流向，折射帶方向性，捲動時背景產生 2–5% 的位移偏差，具備光學重力、黏滯感與色散現象。
- **[視覺邏輯]** 核心採用「雙層分片緩衝（Layer-Split Buffering）」。底層（12px 模糊）與表層（24px 模糊）在滾動時根據加速度進行 `opacity` 交叉淡入，視覺化模擬流體模糊度的震盪變化。色散（Chromatic Aberration）限制在邊緣 2px 範圍內，僅在 `scroll` 事件觸發時執行 4–8% 的位移偏差，靜態時鎖定位置以維持極簡視覺。背景不透明度鎖定為 0.90，透過 Parallax 效應實現真實的折射搬運與物質黏滯感。
- **[參數]**
    - blur: 12px (Base) / 24px (Pulse)；cross-fade: 300ms
    - saturate: 150%
    - bg: rgba(10,12,15,0.90)
    - chromatic-offset: `translateX(±4%)` (Scroll-triggered)
    - transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)`
    - refractive-factor: 2–5% (displacement offset)

#### Mat-03｜氧化切面膜（Oxide Cut Surface）

- **[物理模擬詞彙]** 金屬切割截面受空氣氧化的干涉色薄膜，色相漂移帶「不可預測性」，暗示「剛被切過」
- **[視覺邏輯]** 利用極低 Opacity 的 `conic-gradient`（色相 200°→155°→40°）建立環型折射分佈，模擬金屬切面在不同掠射角下的干涉光。將旋轉中心點（Center Offset）與滑鼠位移進行微量聯動。當滑鼠接近時，色相偏移速度瞬時加快 3 倍，隨後執行指數級緩慢衰減，模擬物理熱量的冷卻過程。疊加一個極微弱的 `filter: drop-shadow`，其色值預設 4 組關鍵色區間與氧化色相動態同步，賦予膜層真實的物理厚度與光譜張力。
- **[參數]**
    - opacity: 0.02（靜態）→0.06（受激發）
    - colour-range: hue 200°→40°
    - blend-mode: screen
    - An-05 cycle: 90000ms（進入視區後 3000ms 觸發加速）
    - center-offset: Mouse-dependent (±5%)
    - center-offset: Mouse-dependent (±5%)
    - shadow-sync: Quad-sector color mapping

#### Mat-04｜根系苔紋（Root Fracture Grain）

- **[物理模擬詞彙]** **「破裂式生長」**——模擬有機結構穿透硬質界面的微觀痕跡。定義為生命秩序對無機材質的滲透，帶 45°/90° 方向性壓力、「張力」與「裂隙感」
- **[視覺邏輯]** 透過全域 `#fractal-master` 濾鏡疊加於霧苔綠底色，透過 2:1 的長寬比拉伸強化 45° 或 90° 的方向性張力。利用濾鏡內建的預混合邏輯解決平淡色塊問題，使內部生成細微結晶，邊緣則結合 `feDisplacementMap` 產生隨機鋸齒破碎感。在裂隙極細處，透過偽元素疊加一條獨立於濾鏡之外的 0.5px、明度高於底色 5% 的高亮線條以維持剛性。配合 **An-04 折線生長動畫**，受測點經過時 `opacity` 產生 0.08 → 0.12 的瞬時增強，模擬水分注入後的色澤變化與微裂隙高光，絕對禁止使用靜態平鋪圖案。
- **[參數]**
    - filter-id: `#fractal-master`
    - baseFrequency: 0.65 (stretched 2:1)
    - numOctaves: 3
    - opacity: 0.08 → 0.12 (on An-04 trigger)
    - colour-base: #3D5C47
    - glint: 0.5px (highlight +5%, stroke-sharpness: optimized)
    - displacement-scale: 4 (normal) → 12 (active growth)
    - area-buffer: 140% (x:-20%, y:-20%)

#### Mat-05｜噪點消光鍛面（Noise Matte Forge）

- **[物理模擬詞彙]** 場域底噪——物質的初始態表面均勻砂狀噪點，「鍛造完成但未拋光」的中間狀態，模擬空氣與表面摩擦的視網膜干擾。
- **[視覺邏輯]** 調用 **Base64 128px 無縫噪點貼圖** 作為全域顆粒底質。利用 `mask-image` 與 `opacity` 的權重組合取代濾鏡運算，顆粒感透過多層 `linear-gradient` 與 `radial-gradient` 的遮罩疊加呈現。靜態時維持低透明度以顯現沈著質感；高速捲動時動態調整 `mask-size` 與 `opacity` 基數，實現視覺暫留補償。
- **[參數]**
    - **來源**: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58VeFAAAABlBMVEUAAAD///+l2Z/dAAACXUlEQVQoz2WQS3IDMQhE9f8v7pInXyYpAnS96pZkkvDx9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX+D8R+WvF/LwAAAAAElFTkSuQmCC")` (128x128px 無縫貼圖)
    - 顆粒尺寸: `background-size: 128px` (等效 grain-size 0.8px)
    - 基礎透明度: 3% – 7% (S-Curve 動態波動)
    - 動態對比度: `contrast(1.0)` → `contrast(1.2)` (捲動速度連動)
    - 邊角補償: `vignette-mask` 透明度 +20% (Radial Gradient 疊加)
    - 效能控制: 全面啟用 `will-change: opacity, filter` 並確保圖層處於獨立合成層

### 維度二：光學（5 種協議）

#### Opt-01｜弧光色散穿透（Arc Chromatic Penetration）

- **[物理模擬詞彙]** 高能電弧穿透金屬薄膜，產生全站能量密度最高、最不穩定且具侵蝕性的光學過載。光譜偏移（色散）伴隨視網膜殘留效應，模擬燒穿螢幕的視覺壓力。
- **[視覺邏輯]** 採 `radial-gradient` 橢圓形疊加，核心 10% 強制設為 `#FFFFFF` 向外擴散至高飽和橘色。邊緣 1px 注入彩虹色散漸層，並隨物件移動速度動態擴張至 3px，疊加 An-02 頻閃。當隨 Mo-01 (重型切入) 出現時，消失瞬間需觸發一個空間鎖定的偽元素，在原地留下持續 300ms 的冷藍反相色殘影。為確保侵蝕感，強制使用 `isolate` 隔絕層，避免與低能級背景過度混合。
- **[參數]**
    - shape: ellipse 60% 40%
    - core-color: #FFFFFF；outer-color: #E8702A
    - opacity: 0.22 (peak)；filter: brightness(200%) contrast(150%)
    - edge-dispersion: 1px–3px (Velocity-dependent)
    - after-image: persistent 300ms (fixed-position)
    - mix-blend-mode: screen

#### Opt-02｜熔接白熱核（Weld Core Glow）

- **[物理模擬詞彙]** 焊接接觸點的白熱核心——內層白熱（2000K），外層橙暈，不規則頻閃而非平穩呼吸，具有物理上的侵蝕力（Erosion）與熱慣性
- **[視覺邏輯]** 採雙層 `radial-gradient` 構建內白熱核與外橙暈。內核結合 `steps(1)` 與 `linear` 混合曲線模擬電弧斷層的隨機跳動，光學暈染控制在 8px 內。於頻閃峰值（Keyframe 0%-10%），色溫從 2000K 瞬時飆升至 8000K（冷藍白光），此時白光允許產生溢出邊框的「暈渲效應」。外層橙暈保留 150ms 餘溫冷卻感。所有頻閃週期皆為非對稱設計，確保動能不具備可預測的規律。
- **[參數]**
    - inner: #FFFFFF (radius 8px)
    - outer: rgba(232,112,42,0.4) (radius 60px)
    - temp-shift: 8000K (#DCE6F0) ↔ 2000K (#E8702A)
    - in-burst: 60ms / out-cool: 700ms
    - residual-heat: 150ms (0.05 opacity)
    - filter: `contrast(150%) brightness(200%)`
    - strobe: Random fault cycle (An-02)

#### Opt-03｜精密格柵呼吸（Precision Grid Breath）

- **[物理模擬詞彙]** 精密儀器格線 LED 背光（6200K），交叉節點微亮——場域呼吸層的光學基底，節點的隨機 opacity 起伏產生「場域活著」的感知。節點的閃爍應該像「生物神經元」或「主機板指示燈」般具備自發性。
- **[視覺邏輯]** CSS 重複格線背景。節點偽元素 2px 透過 `will-change: opacity` 優化。採用群組隨機化邏輯（各自錯開 0–9000ms 延遲），製造非整齊閃爍。亮起時伴隨 0.5px 高斯模糊。當位於高能區塊（如互動元件旁）時，隨機延遲上限縮減至 3000ms，暗示能量聚集。Hover 時觸發瞬間電湧，色溫從 2000K 飆升至 8000K 冷白。
- **[參數]**
    - grid-gap: custom-define
    - node-size: 2px (0.5px blur-spread)
    - temp-low: 2000K (#E8702A)；temp-high: 8000K (#DCE6F0)
    - in-pulse: 60ms；out-cool: 700ms
    - animation-grouping: 6-tier random delay

#### Opt-04｜重力折射暈（Gravitational Refraction Halo）

- **[物理模擬詞彙]** 深水中具備重力的折射光暈。光線在此被物質重量拉扯，帶有液體的黏滯性，捲動時產生慣性拉伸與焦散干涉。
- **[視覺邏輯]** 透過複合 `filter: drop-shadow` 與偽元素實現光學相加效果（Screen Blend）。當頁面高速捲動時，光暈透過 `transform: scaleY(1.2)` 產生慣性拉伸。在底層陰影中疊加全域 `#noise-master` 噪點遮罩，使噪點隨光暈位移產生顆粒感干涉。Int-04 懸浮時激活全層高能態，Parallax 偏移設定為 -2% 以強化物理下墜的重力感。
- **[參數]**
    - shadow-core: 0 0 24px rgba(140,148,158,0.1)
    - shadow-depth: 0 0 60px rgba(10,12,15,0.40)
    - noise-integration: `#noise-master` (masked)
    - inertial-stretch: `scaleY(1.2)` (Velocity-based)
    - parallax-offset: -2%

#### Opt-05｜掠射方向冷光（Directional Grazing Cold Light）

容器頂部 + 左側加 1px 極淡高光（linear-gradient 帶方向），底部 + 右側加深陰影線；全站光源方向一致（top-left 30°）

- **[物理模擬詞彙]**6500K 低角度冷白光（左上 30°），突起邊緣形成極細方向性高光線——全站統一光源方向。
- **[視覺邏輯]** 全域變數鎖定 `--global-light-direction: 150deg`。容器頂部亮線採 `overlay` 模式，產生 1px 方向性高光。高光線具備材質感知特性：金屬（冷金屬材質）維持 1px 銳利硬邊；有機質（綠/藍色材質）自動執行 2px 模糊擴散處理。底部與右下角使用 Mat-05 噪點的加強版執行環境光遮蔽（Occlusion），採用 `multiply` 模式強化邊緣重量。
- **[參數]**
    - light-color: #DCE6F0 (6500K)
    - highlight-blend: `overlay` / shadow-blend: `multiply`
    - highlight-spec: 1px linear-gradient (rgba(220,230,240,0.12) → transparent)
    - shadow-edge: 1px rgba(0,0,0,0.30)
    - occlusion: `Mat-05 grain` (darker version)
    - adaptive-blur: Metal (0px) / Organic (2px)

## 動能與交互字典

### 維度一：動態 Motion（5 種協議）

#### Mo-01｜鋼刃切入歸位（Steel Blade Cut-Return）

- **[動能模擬詞彙]** 刀刃精準切入目標後帶水性 spring 回彈，先超切再歸零，伴隨物理坍縮與重力回彈。強調「瞬發、暴力、精準」的釘入體感，而非優雅滑行。
- **[視覺邏輯]** 從從偏移 40px 快速切入至 -2px（過位），由 spring 強制回彈至 0，`opacity` 0→1 同步。進場時 `transform-origin` 鎖定在切入反方向以維持動量重心，藉由 `scaleX` 的微幅擠壓模擬撞擊瞬間的彈性變形。歸位瞬間透過疊加 `::after` 遮罩執行 120ms 內快速衰減的白色透明度閃擊（Opacity 0.4→0）。
- **[動態邏輯]**
    - **Phase-1（衝擊）**: `translate(40px) → translate(-2px)` 並同步執行 `scaleX(1.08)` 與 `opacity 0 → 1`。歷時 110ms，採用 `cubic-bezier(0.15, 1, 0.3, 1.1)`。
    - **Phase-2（歸位）**: `translate(-2px) → 0` 並將 `scaleX` 恢復為 1。採用彈簧回彈係數 `spring(1.2, 140, 18, 0)`。
    - **Phase-3（餘振）**: 歸位瞬間觸發 `::after` 偽元素透明度脈衝，並在 120ms 內線性衰減。
- **[材質邏輯]** 進場與碰撞階段（Phase-1） Mat-01 底紋 opacity 暫態提升至 8%，歸位鎖定後 200ms 內平滑降至 3%。
- **[光學邏輯]** Phase-1 結束觸發 Opt-01 色散邊緣閃擊（60ms，opacity 0→0.2→0），位移量隨 `scaleX` 擠壓感同步擴張至 3px。
- **[參數]** Phase-1: 110ms cubic-bezier(0.15, 1, 0.3, 1.1)；回彈係數: spring(1.2, 140, 18, 0)；材質激發回落: 200ms；偽元素閃擊衰減: 120ms。
- **[週期]** 單次，組件掛載或進入視口時觸發（不與滾動事件實時連動）

#### Mo-02｜根系破土漂升（Root Upward Breach）

- **[動能模擬詞彙]** 結構破土衝擊——非對稱生長動量。克服阻力與重力的「突破感」，具備物質生命重量的微觀不穩定性
- **[視覺邏輯]** 動作拆解為「瞬間破土（衝擊）— 高阻尼懸浮（穩定）— 極慢物理沉降（歸位）」。多元素間採用隨機 Delay（0ms–2000ms）。在漂升至 15% 峰值時，Opt-05 冷光產生 60Hz 微顫，並利用 `will-change: transform` 確保硬體加速。
- **[動態邏輯]**
    - **破土（0% - 15%）**: 從 `translateY(0)` 快速衝至 `translateY(-4px)`，採用 `cubic-bezier(0.22, 1, 0.36, 1)`。
    - **懸浮（15% - 30%）**: 維持在高度偏移，僅進行 `translateY(-3.5px)` 線性緩動。
    - **沉降（30% - 100%）**: 緩慢回歸原位 `translateY(0)`，採用 `cubic-bezier(0.5, 0, 0.75, 0)`。
    - **隨機化**: 多元素隨機序列啟動，循環週期為 5500ms–7500ms。
- **[材質邏輯]** 採 **Mat-04（噪點全息）** 的 `transform: translate` 位移與 `opacity` 連動：當物件位於 translateY 峰值時，透過 CSS 變數微調 `contrast` 至 1.05。
- **[光學邏輯]** 15% 峰值處觸發 Opt-05 掠射冷光（opacity 0→0.05→0.02），伴隨 60ms 的 `::before` 高光偽元素瞬閃。
- **[參數]** Duration: 5500ms–7500ms（隨機）；破土權重: 15% 週期；沉降權重: 70% 週期；峰值閃爍: 60ms 偽元素高光；材質偏移: 0.05。
- **[週期]** 持續循環，頁面加載後隨機序列啟動

#### Mo-03｜刻度延伸掃出（Calibration Span Sweep）

- **[動能模擬詞彙]** 量測儀器刻度從零點精準延伸——幾何結構的完整展開，具備機械導軌的剛性。強調「物理路徑的強硬佔領」
- **[視覺邏輯]** 核心採用 `clip-path: inset(0 100% 0 0)` 轉換至 `inset(0 -2px 0 0)` 以確保邊緣像素完全覆蓋。禁止使用 Opacity Fade，維持硬切邊緣並輔以 1px 的極微過渡消除鋸齒。前端鎖定 2px 寬的高亮掃描核心（基於 Opt-02），掃過路徑時底圖透過 CSS 變數執行瞬時明度激活，多元素組件採 25ms 的步進（Stagger）交互。
- **[動態邏輯]** `clip-path` 變換採用 `cubic-bezier(0.16, 1, 0.3, 1)`。掃描線與剪裁邊緣達成像素級同步，前端 Opt-01 色散位移鎖定為 1px。使用 `will-change: clip-path` 提升合成層效能。
- **[材質邏輯]** 掃過區域 Mat-01 紋理 opacity 瞬增（3% → 8%），並在 180ms 內透過 `cubic-bezier(0.4, 0, 0.2, 1)` 回落。
- **[光學邏輯]** 掃描前沿 **Opt-02（熔接白熱核）**。核心點利用偽元素疊加模擬 `brightness(1.5)` 效果，並在邊緣產生 1px 的 **Opt-01（色散位移）**，`opacity` 保持在 0.1。
- **[參數]** duration: 280ms；stagger: 25ms；easing: `cubic-bezier(0.16, 1, 0.3, 1)`；Mat-01 激發回落: 180ms；前沿色散: 1px (Opt-01)
- **[週期]** 單次，進入視口或數據加載觸發

#### Mo-04｜乾切殘影離場（Clean Shear Residual Exit）

- **[動能模擬詞彙]** 切削工具撤離產生的物理真空感。強調乾切（Shear）造成的空間坍縮與殘影向內收縮的「負壓」效應，非自然消失
- **[視覺邏輯]** 主體執行極速側向撤離（Translate + Skew），殘影偽元素在原位執行向心式的縮放坍縮（Scale Down）。離場點在主體消失瞬間產生一個 4px 的亮度湮滅點，並透過 `opacity` 快速歸零模擬空間湮滅。
- **[動態邏輯]**
    - **Phase-1 (主體)**: `translate(-20px)` + `skewX(-4deg)`。執行時間 80ms，採用 `cubic-bezier(0.7, 0, 0.84, 0)`。
    - **Phase-2 (殘影)**: 在主體離場 30ms 後啟動，`scale(1 → 0.85)` 並伴隨 `opacity 0.4 → 0`。總時長 120ms 以增強視覺存留感。
- **[材質邏輯]** 殘影繼承 Mat-01 拉絲紋理，`contrast` 調整至 0.8。
- **[光學邏輯]** 撤離瞬間主體邊緣觸發 Opt-01 色散閃擊（opacity 0.15，40ms），離場點產生 4px 的亮度湮滅點，利用 `transform: scale(0)` 同步消失。
- **[參數]** 主體離場: 80ms；殘影坍縮: 120ms；縮放值: 0.85；斜切角度: -4deg；湮滅點直徑: 4px
- **[週期]** 單次，組件銷毀或路由切換

#### Mo-05｜深水重力沉降（Gravitational Water Settle）

- **[動能模擬詞彙]** 液態重力定影——物件沉入具備高度黏滯性的流體介質。強調「多次微幅且衰減極快」的震盪，模擬物件排開水分後的自然落定。
- **[視覺邏輯]** `translateY(-16px)` 緩降，經歷 「1.5px → -0.8px → 0.4px → 0」 的三級流體阻尼震盪。下降過程中背景 Mat-02 採靜態模糊與 `opacity` 連動。落定瞬間啟動折射位移（Refraction Offset）清零與最終數值鎖定。
- **[動態邏輯]**
    - **Phase-1（沉降）**: 600ms 平滑降落，曲線 `cubic-bezier(0.25, 1, 0.3, 1)`。
    - **Phase-2（定影）**: 採用 `spring(1.1, 120, 20, 0)`。在 400ms 內精準歸零。
- **[材質邏輯]** 下降過程中 Mat-02 玻璃模糊度與透明度從基礎值過渡至目標值。落定瞬間，利用 `transform: translate` 執行 1.5% 的折射位移補償，並在 Phase-2 完成後停止屬性計算。
- **[光學邏輯]** 落定瞬間觸發 Opt-04 重力折射暈（opacity 0→0.06→0 + scale(0.98 → 1.02)，400ms），利用渲染分層降低 GPU 混合壓力。
- **[參數]** Phase-1: 600ms cubic-bezier(0.25, 1, 0.3, 1)；Phase-2: spring(1.1, 120, 20, 0)；Opt-04 漣漪: 400ms；折射位移偏移量: 1.5%
- **[週期]** 單次，組件進場觸發，完成後銷毀即時計算路徑

### 維度二：動效 Animation（5 種協議）

#### An-01｜場域光學呼吸（Field Optical Breath）

- **[動能模擬詞彙]** 由空間深度帶動的非規則生命訊號。利用多維度週期干涉徹底消除數位規律感，讓靜止材質表達底層運算的活性
- **[視覺邏輯]** 雙層呼吸曲線（Layer-A & Layer-B）疊加，調整 `opacity` 與基於 CSS 變數的 `contrast`。當兩層能量波峰重疊時，觸發格柵節點（Opt-03）與鄰近路徑的微電流感，形成局部動態連動。
- **[動態邏輯]** 採用 `cubic-bezier(0.4, 0, 0.6, 1)`。兩層動畫週期分別為 7100ms 與 10700ms。微閃脈衝由 JS 在波峰區間隨機激發，並限制單次觸發數量以維持效能。
- **[材質邏輯]** 呼吸作用於 Mat-05 噪點，波峰時透過變數控制將 `contrast` 提升至 1.12。
- **[光學邏輯]** 節點連動時產生極細亮線（Opt-02 變體），時長鎖定 45ms，`opacity` 採 0→0.25→0，利用 `will-change: opacity` 優化。
- **[參數]** Layer-A: 7100ms；Layer-B: 10700ms；opacity 範圍: 0.03–0.1（視螢幕環境動態調整基準）；噪點 contrast: 1.0–1.12；節點連動脈衝: 45ms
- **[週期]** 持續循環，頁面掛載即啟動，低優先級渲染

#### An-02｜弧光不規則頻閃（Arc Irregular Flash）

- **[動能模擬詞彙]** 高壓電弧不穩定高能——不只是明度跳變，更是「高壓電弧擊穿空氣時的物理震顫」，帶物理顫震與光學溢出
- **[視覺邏輯]** 三個不同動畫層疊加（flash-A / flash-B / flash-C，週期互質），由物理干涉產生隨機感。Peak 瞬間（20ms）觸發：(1) `transform: scale(1.002) translate(0.3px, -0.3px)` 隨機微震，(2) 透過偽元素 `opacity` 模擬光學溢出，(3) Mat-03 氧化膜 `opacity` 增加同步執行 `hue-rotate` 偏移。
- **[動態邏輯]** 採用 `animation: flash-A 4200ms, flash-B 5300ms, flash-C 7100ms`。Peak 觸發時序：亮起 20ms（step-start）→ 峰值 60–180ms（隨機）→ 暗落 120ms（ease-out）→ 隨機靜止 400–1200ms。利用 `will-change: transform, opacity`。
- **[材質邏輯]** Peak 時 Mat-03 `opacity +0.008` 與 `hue-rotate(±10deg)` 同步。峰值後 250ms 內回落，維持微觀受壓膨脹感。
- **[光學邏輯]** 每次 peak 伴隨 Opt-01 色散 1px 彩虹瞬閃（20ms，opacity 0→0.1→0），光學強化由疊加的層級透明度完成，對比度與亮度補償改由 `mix-blend-mode: screen` 配合特定色塊實作。
- **[參數]** flash-A: 4200ms；flash-B: 5300ms；flash-C: 7100ms；peak translate: `±0.3px` 隨機；scale peak: 1.002；hue-rotate: ±10deg；色散閃: 20ms；光學溢出 opacity 峰值: 0.15。
- **[週期]** 持續，僅在組件進入視口內時激活。

#### An-03｜精密掃描線（Precision Scan Trace）

- **[動能模擬詞彙]** 精密儀器水平掃描——光線物理性掠過表面，激發材質反應，殘影具備色散分層的視網膜錯覺
- **[視覺邏輯]** 掃描線帶 60px 高 `linear-gradient` 拖尾，使用 `mix-blend-mode: screen` 並在父層設定 `contain: strict` 以提升渲染效能。掃描線經過時，下方 Mat-01 拉絲紋理產生瞬時明度提升。前沿帶 `::before` 偽元素模擬高亮折射，增加層次深度。
- **[動態邏輯]** 掃描主體：`translateY(-100%)→translateY(100%)` 勻速運動。Mat-01 激發：透過 CSS 變數動態控制掃描路徑座標內的底紋明度。透過 20ms 的時序落差分層，產生 **冷白（#DCE6F0）** 與 Primary-01（#8C949E） 的光譜殘影。
- **[材質邏輯]** Mat-01 掃描激發：掃描線覆蓋範圍內明度提升 8%，隨移動軌跡實時偏移；掃描線離開後 150ms 內回落。
- **[光學邏輯]** 前沿：Opt-05 冷光增強（0.5px）輔以偽元素模擬折射；拖尾：60px 漸層（opacity 0.1→0）；光譜殘影：藉由 20ms 的頻道偏移，製造 #DCE6F0 與 #8C949E 的雙重曝光視網膜殘留。
- **[參數]** 主體: height 1px；拖尾: 60px gradient；duration: 6000ms（循環）/ 800ms（單次）；光譜殘影: 20ms；Mat-01 激發回落: 150ms；contain: strict； will-change: transform
- **[週期]** 雙模式：背景持續循環；Hover 單次觸發（帶 100ms 延遲避錯）。

#### An-04｜幾何折線生長（Geometric Fractal Growth）

- **[動能模擬詞彙]** 晶格穿刺生長的「蓄力 → 破裂 → 噴發」——每一個轉折點都是克服阻力的節點蓄力，生長完成後線跡是活的導線
- **[視覺邏輯]** SVG `stroke-dashoffset` 從 100% 變為 0%。轉折點觸發「節點蓄力」：在轉折點前執行微幅減速與 2px 物理回彈。生長完成後，線跡寬度在 1.2s 內從 0.8px 回縮至 0.5px。針對長度佔比較小的 segment 自動簡化蓄力過程，維持整體動態連貫性。
- **[動態邏輯]** 路徑採 `cubic-bezier(0.85, 0, 0.15, 1)` 非對稱推進。轉折點插入 40ms 減速與 2px 回彈。生長結束後線跡轉為靜態層並強制開啟 `contain: paint`，僅保留基礎 `opacity` 呼吸。
- **[材質邏輯]** 線跡帶 Mat-04 根系苔紋底質；`stroke-width` 執行 0.8px 至 0.5px 的過渡。落定後釋放 JS 渲染器，改由 CSS 處理弱化版呼吸效果。
- **[光學邏輯]** 前沿帶 Opt-01 色散（1px，opacity 0.05）；轉折點前亮度提升至 0.06，穿越後即時回落。生長完成後銷毀色散濾鏡圖層。
- **[參數]** 總 duration: 1500ms；轉折點蓄力: 40ms 剎車 + 2px 回彈；`stroke-width`: 0.8px → 0.5px；落定後呼吸週期: 9000ms。
- **[週期]** 單次，進入視口觸發；完成後釋放運算資源。

#### An-05｜氧化色緩漂（Oxide Hue Slow Drift）

- **[動能模擬詞彙]** 金屬氧化薄膜的雙重干涉漂移。透過容器旋轉與色值偏移的相位差，產生顏色在表面緩緩流動的物理質感。Active 狀態受力時產生「熱應力激發」
- **[視覺邏輯]** 雙軸相位干涉：(1) 容器旋轉週期 97s，(2) hue-rotate 週期 149s。通過光源區段時，對比度與飽和度採階梯式提升。Active 狀態下利用 `::before` 偽元素瞬時亮起並帶 120ms 物理顫震。
- **[動態邏輯]** 旋轉與色偏採 `linear` 確保相位穩定。Active 激發：`opacity` 從 0.045 升至 0.12，時長 50ms。採用 `will-change: transform` 降低長週期動畫對主執行緒的佔用。
- **[材質邏輯]** 僅限 Mat-03 偽元素。Active 時同步觸發 CSS 變數控制的飽和度偏移，避免高頻調用重型濾鏡。
- **[光學邏輯]** 光源區段（300°–60°）：飽和度 130% + 對比度 1.1；非光源區段回歸標準態。
- **[參數]** Rotate: 97000ms；Hue: 149000ms；Active-In: 50ms；Active-Out: 600ms；激發飽和度: 1.5。
- **[週期]** 持續循環，Hover/Click 觸發 Active 變體。

### 維度三：交互 Interaction（5 種協議）

#### Int-01｜熔接色散穿透（Weld Chromatic Penetration）

- **[動能模擬詞彙]** Hover 時高能弧光接觸冰冷金屬邊緣的物理反應：白熱核心瞬出（40ms）+ Opt-01 色散邊緣同步爆發。強調「高溫瞬間擊穿」的極快啟動與能量殘留後的「冷凝」過程。
- **[視覺邏輯]** 透過偽元素 `::before` 觸發 Opt-02 雙層徑向漸層，邊框同步切換為交互橙色。色散邊緣利用 `will-change: opacity` 確保 40ms 內的穩定爆發。離開時核心立即湮滅，利用 `transition` 讓橙色光暈執行線性物理冷卻（冷凝效果）。
- **[動態邏輯]** :hover → inner/outer opacity 0→1 採 `cubic-bezier(0.05, 0.7, 0.1, 1.0)`（40ms 爆發）；:not(:hover) → inner 120ms 湮滅，outer 600ms `cubic-bezier(0.4, 0, 1, 1)`（冷凝緩散）。
- **[材質邏輯]** Hover 時 Mat-03 氧化膜透過 CSS 變數將 opacity 瞬增至 0.06；離開後 150ms 內平滑回落。
- **[光學邏輯]** 色散邊緣 1px（opacity 0.15）於 30ms 內閃現，利用獨立合成層模擬弧光接觸瞬間的光譜偏移，避免與主體重繪連動。
- **[參數]** inner-in: 40ms；outer-in: 40ms；色散-in: 30ms；inner-out: 120ms；outer-out: 600ms；激發曲線: `cubic-bezier(0.05, 0.7, 0.1, 1.0)`。
- **[週期]** 每次 Hover / MouseLeave 觸發。

#### Int-02｜液態鋼片彈震（Liquid Steel Spring）

- **[動能模擬詞彙]** 按下時金屬液態受壓微陷，釋放時 spring 過彈再歸零；伴隨點擊的「波紋式光學擴散」（聲音類比的視覺實現）
- **[視覺邏輯]** :active 時 `transform` 執行橫向與縱向非對稱微縮；釋放時透過彈簧曲線過彈至 1.015 再歸歸位。點擊中心觸發 `::after` 執行輕量化波紋擴散，僅改變透明度與比例以優化效能。
- **[動態邏輯]** mousedown: `scale(0.96, 0.98)` 60ms ease-in；mouseup: `scale(1.015, 1.005)` 100ms `cubic-bezier(0.2, 1.6, 0.4, 1)` → `scale(1.0)` 100ms。波紋：`radial-gradient` 擴散，opacity 0.25→0，時長 250ms。
- **[材質邏輯]** 按下時 Mat-02 玻璃位移增加 0.8%（受壓變形感）；釋放時隨 `transform` 同步歸位，維持物理體積守恆感。
- **[光學邏輯]** 波紋擴散採用 Opt-04 輕量化方案，利用 `transform: scale` 與 `opacity` 控制，嚴禁觸發 `blur` 重繪，確保在高頻點擊下的反應速度。
- **[參數]** press: scale(0.96, 0.98)，60ms；bounce: scale(1.015, 1.005)，100ms；settle: 100ms；波紋: 250ms；Opt-04 opacity: 0.25→0。
- **[週期]** 每次點擊觸發，使用 `passive: true` 確保不干擾頁面原生滾動行為

#### Int-03｜刀刃焦點框（Blade Focus Incision）

- **[動能模擬詞彙]** 聚焦時精密邊框的「瞬間切出」，幾何折線以「精密步進」補充外框（250ms），展現機械咬合的精準度。
- **[視覺邏輯]** `:focus-visible` 時，2px 橙色 `outline` 即時定位。幾何折線（An-04 變體）透過 `svg` 的 `stroke-dashoffset` 從左上角以高頻步進方式延伸，嚴禁滑動感的線性動畫。
- **[動態邏輯]** `outline`: 0ms 即時顯現；折線 `stroke-dashoffset`: 250ms `cubic-bezier(0.16, 1, 0.3, 1)`（剛性伸展）。`:blur` 時利用 `visibility: hidden` 瞬時隱藏（0ms），確保不留殘影。
- **[材質邏輯]** 焦點框帶 Mat-04 根系苔紋，利用 `vector-effect: non-scaling-stroke` 確保線條粗細在延伸與縮放過程中保持恆定。
- **[光學邏輯]** `outline` 出現瞬間透過偽元素 `::after` 執行 Opt-01 色散閃擊（1px，opacity 0.12，50ms），模擬機械卡榫接合瞬間的應力光譜。
- **[參數]** outline: 2px solid `#E8702A`；offset: 3px；折線 duration: 250ms；色散閃: 50ms。
- **[週期]** :focus-visible 觸發，:blur 瞬時消失。

#### Int-04｜深水重力懸浮（Gravitational Depth Float）

- **[動能模擬詞彙]** Hover 時物件從具備深度的重力環境中克服阻力上浮。強調「高粘滯力下的慣性」與「緩慢增加的物理勢能」。
- **[視覺邏輯]** `translateY(-4px)`，配合 Mat-02 玻璃位移量增加。上浮過程賦予極強的阻尼感，模擬物件從濃稠介質中緩慢脫離的過程。
- **[動態邏輯]** `transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1)`（高阻尼曲線）。`backdrop-filter` 的 `blur` 數值隨位移同步增加 2px，利用 `will-change: transform` 優化複合層渲染。
- **[材質邏輯]** Hover 時透過 CSS 變數將 Mat-02 頂部高光線亮度提升 5%，模擬物件接近光源位置的物理反射變化。
- **[光學邏輯]** Opt-04 三層陰影分階段激活，層級間隔 40ms stagger，利用獨立合成層避免觸發主體重繪。
- **[參數]** translateY: -4px；blur: +2px；上浮 duration: 350ms；Stagger: 40ms；還原 duration: 300ms `cubic-bezier(0.5, 0, 0.75, 0)`。
- **[週期]** :hover 觸發，:not(:hover) 還原。

#### Int-05｜掃描態系統讀取（Scan State System Load）

- **[動能模擬詞彙]** 系統進入載入狀態：掃描線啟動，整體明度降低。強調「儀器正在進行精密採樣」的機械冰冷感，嚴禁緩慢淡入。
- **[視覺邏輯]** loading 啟動：`opacity` 採階梯式下降至 0.65（80ms）並同步激活 An-03 掃描線（4000ms 循環）。loaded 完成：瞬時還原明度（100ms）並連動觸發 Mo-04 乾切離場。
- **[動態邏輯]** loading 激活：`opacity` 透過 `steps(4)` 執行 80ms 變換，模擬電壓不穩產生的物理閃爍感；loading 結束：`opacity` 於 100ms 內線性還原，並即時啟動 Mo-04 殘影協議。
- **[材質邏輯]** 載入中 Mat-02 執行微幅物理振盪：`translate(±0.2px)`，頻率 12Hz，利用 CSS `transform` 動態偏移模擬硬體運作中的機械震動。
- **[光學邏輯]** 掃描線前沿 Opt-05 亮度補償提升 20%，透過偽元素疊加模擬掃描光源的強光束感，確保在低明度背景下的視覺穿透力。
- **[參數]** 降明度: 0.65，80ms；振盪頻率: 12Hz；振盪幅度: ±0.2px；掃描光源補償: 1.2x。
- **[週期]** 由系統 loading 狀態標記控制。

## 容器區隔策略（5 種）

**CS-01｜冷空間虛空（Cold Void）**

- **[物理狀態隱喻]** 兩塊金屬板之間的真空間隙——無接觸，無洩漏，純距離感。但場域呼吸層在此以最低密度存在，「空」不等於「死」
- **[視覺邏輯]** 純負空間，上下各 140–180px padding，無任何視覺邊界線
- **[動態邏輯]** 無動態；但底層 Opt-03 格柵節點的 An-01 場域呼吸在此延伸（opacity 3%–5%，最低密度）
- **[物質形態邏輯]** 底層背景 `#0A0C0F` 直接延伸，Mat-01 底紋（3%）維持方向性
- **[負空間策略]** 負空間是主體，視覺密度 ≤ 3%；兩側邊距保持全局值（80px）

**CS-02｜精密截面切割線（Precision Section Cut）**

- **[物理狀態隱喻]** 金屬車床的截面邊緣——清晰、銳利、有重量感
- **[視覺邏輯]** 0.5–1px 水平線，`#1F252C`，opacity 70%，橫跨全寬
- **[動態邏輯]** 首次進入視口時，Mo-03 刻度延伸從左向右（400ms）；常態靜止；但幾何勢動層 0.5px 亮點沿線條緩慢偏移（線條「在延伸」而非靜止）
- **[物質形態邏輯]** 線條上下各 4px 微暗帶（Mat-05，opacity 2%）強化截面厚度感；帶 Opt-05 左上方向冷光（線條頂部 opacity 0.04）
- **[負空間策略]** 線條上下各 ≥ 40px 呼吸空間

**CS-03｜深度斷層（Depth Fault）**

- **[物理狀態隱喻]** 地殼斷層錯位——兩個能量層的硬切，無過渡，有可感高度差
- **[視覺邏輯]** 背景色從 `#0A0C0F` 硬切至 `#13171C`（或反向），無漸變
- **[動態邏輯]** 無切換動態；新層 Mat-01 拉絲方向改為 -3deg（與底層 0deg 形成物質差異）；Mat-02 折射位移在新層啟動
- **[物質形態邏輯]** 新層啟用 Mat-01（-3deg）+ Mat-02 折射玻璃容器；底層延用 Mat-05 消光鍛面
- **[負空間策略]** 斷層線兩側無額外 padding；新層第一個內容元素距頂部 ≥ 64px

**CS-04｜切角力學邊界（Angled Shear Boundary）**

- **[物理狀態隱喻]** 金屬剪切機的斜切截面——有方向性的力，從一個能量場向另一個撕裂
- **[視覺邏輯]** 區塊頂端 clip-path polygon 3–5° 斜切，切角方向一致（左低右高）
- **[動態邏輯]** 進入視口時，切角邊緣出現 Opt-01 弧光色散穿透（opacity 0→0.18→0，800ms），模擬切割光學散射
- **[物質形態邏輯]** 切角面 Mat-03 氧化切面膜（opacity 0.04）+ An-05 氧化色漂移；切角邊緣帶 Opt-01 色散效果
- **[負空間策略]** 斜切高度 40–60px；視覺引導向右下（配合閱讀方向）；斜切以下內容正常排版

**CS-05｜格柵能量消散（Grid Field Dissolution）**

- **[物理狀態隱喻]** 精密儀器訊號的衰減邊界——能量並非截斷，而是緩緩失去，帶物理衰減感
- **[視覺邏輯]** Opt-03 格柵在區塊邊界透過 CSS mask-image linear-gradient，opacity 從 8% 漸變至 0%
- **[動態邏輯]** 衰減區域的格柵節點，An-01 場域呼吸的 delay 遞增（離邊界越近，delay 越大，越先「停止呼吸」），模擬有機訊號衰減
- **[物質形態邏輯]** 消散區無額外物質介入，格柵即為過渡介質；Mat-01 底紋在消散區 opacity 同步降低
- **[負空間策略]** 消散漸變區高度 80–120px；此區域內不放置任何內容元素