# 空間系統

**基礎模數：** 8px（所有間距、尺寸均為 8 的倍數）

**負空間原則：** 內容最大寬度 1000px，頁面密度 ≤ 38%（62% 以上為負空間）。負空間不等於死空間——An-01 場域呼吸與 Opt-03 格柵在負空間以最低密度（3%–5%）維持動態存在。

## 響應式網格

| 斷點 | 欄數 | Gutter | 頁面邊距 |
| --- | --- | --- | --- |
| 桌面（≥ 1280px） | 12 欄 | 24px | 80px |
| 平板（768–1279px） | 8 欄 | 20px | 48px |
| 手機（< 768px） | 4 欄 | 16px | 20px |

## 斷點邏輯

- 多欄改單欄垂直堆疊
- 導覽列 <768px 收合漢堡，展開 Mo-01 從右切入，收合 Mo-04 乾切殘影離場
- Display: 60px→38px；H1: 44px→32px；H2: 30px→24px
- 卡片全寬，邊距 20px，padding 24px
- CTA 按鈕全寬，高度 56px
- 水平時間線改垂直時間線（左側 2px 橙線）
- 所有主動動能層（An-01、An-02、Mo-02）在手機版保留；prefers-reduced-motion 退化為 opacity fade（200ms）

## 無障礙標準

- 主要文字與背景對比度 ≥ 4.5:1（AA），標題 ≥ 7:1（AAA）
- 所有互動元素具備 :focus-visible（Int-03 刀刃焦點框）
- 圖片具備語意 alt；裝飾性圖片 alt=""
- 表單輸入框具備 `<label>` 或 `aria-label`
- 鍵盤完整操作，Tab 順序符合視覺閱讀順序
- 不可僅靠顏色傳達狀態（錯誤需同時附帶文字說明）
- prefers-reduced-motion：所有 Animation / Motion 退化為 opacity fade（200ms）

## 材質母本定義

必須定義在網站的全域 Layout 的最頂層，建議放置在 `<body>` 開放標籤後的第一個 `<div>` 中並設為 `hidden`。

### **#fractal-master｜分形生長母本（Fractal Growth Core）**

- **[放置位置]** 全域 HTML 頂層，作為 `Mat-04` 與物件變形擾動的基底。
- **[視覺邏輯]**
    - 利用 `turbulence` 的低頻震盪模擬有機物的分形生長（如苔紋、裂痕）。
    - 配合 `feDisplacementMap` 讓物件邊緣產生受力擠壓的真實凹凸感，而非單純的圖案疊加。
- **[參數]**
    - `id`: `fractal-master`
    - `x` / `y`: `-20%` (防止邊緣位移截斷)
    - `width` / `height`: `140%`
    - `type`: `turbulence`
    - `baseFrequency`: `0.65`（決定擾動波長）
    - `numOctaves`: `4`（決定細節崎嶇度）
    - `displacement-scale`: `4`（決定物件受擾動的位移強度）
