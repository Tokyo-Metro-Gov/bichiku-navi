// 上階の係数
export const upStairsRate = 7

// 階下の係数
export const downStairsRate = 3

export const categoryA1 = [7]
export const categoryA2 = [10, 13, 14]
export const categoryB1 = [19, 20, 23, 24, 25, 26, 31, 38, 40, 42, 61, 62]
export const categoryB2 = [21, 29]
export const categoryB3 = [35]
export const categoryC = [41, 60]
export const categoryD1 = [53, 54]
export const categoryD2 = [9, 22, 30, 33, 34, 37, 55, 56]
export const lineShareIds = [
  1, 2, 3, 21, 22, 23, 24, 30, 34, 37, 38, 39, 55, 57, 58, 59, 60, 61
]
// child1: 子供 3歳~小6
// child2: 子供 中学生以上

// `quantity`プロパティも存在する
// これはスクリプトで動的に挿入する
// `quantity`が0の品目を結果から除外する
// 調味料セットの様な具体的な数値が必要ではないものは、
// `quantity = ''` として処理し、`quantity = 0`にしないことで結果に含める

// 具体的な数値が必要ではない品目(適宜・適量のような品目)
// X人でX個
// 特定の世代だけでX個
// のような品目は`required`を記述しない
export const stockpileList = [
  {
    id: 1,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '水',
      en: 'Water (for drinking, cooking, etc.)'
    },
    unit: {
      ja: 'L',
      en: 'liters'
    },
    description: {
      ja: '人が生命を維持するのに必要な水分量は、年齢や体重によって変わってきますが1日1人3リットルが目安量です。',
      en: 'The human body needs approximately 3 liters per day to maintain life. Also, the amount differs depending on the age and weight.'
    },
    required: {
      infantsMale: 2.4,
      infantsFemale: 2.4,
      child1Male: 2.4,
      child1Female: 2.4,
      child2Male: 3,
      child2Female: 3,
      adultMale: 3,
      adultFemale: 3,
      agedMale: 3,
      agedFemale: 3
    },
    url: {
      yahoo: 'https://bit.ly/2Nt1CVQ',
      rakuten: 'https://bit.ly/37DfsM3',
      amazon: 'https://amzn.to/37CbHGI'
    }
  },
  {
    id: 2,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: 'レトルトご飯',
      en: 'Retort cooked  rice'
    },
    unit: {
      ja: '食',
      en: 'packs'
    },
    description: {
      ja: '災害時には、洗わなくてもよいレトルトのおかゆやご飯があると少しでも水の節約になります。おかゆは乳幼児や高齢者の食事としても使えます。',
      en: 'Pre-packed rice and rice porridge are helpful to save water. Rice porridge is also useful as a meal for babies and older people.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 2.4,
      child1Female: 2.4,
      child2Male: 3,
      child2Female: 3,
      adultMale: 3,
      adultFemale: 3,
      agedMale: 3,
      agedFemale: 3
    },
    url: {
      yahoo: 'https://bit.ly/2MjXtmC',
      rakuten: 'https://bit.ly/3aIFCPz',
      amazon: 'https://amzn.to/37zEImE'
    }
  },
  {
    id: 3,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: 'レトルト食品',
      en: 'Retort-packed food'
    },
    unit: {
      ja: '個',
      en: 'packs'
    },
    description: {
      ja: '調理不要のバラエティーに富んだレトルト食品。災害時は栄養バランスが偏りがちなので、たんぱく質が取れるお肉やお魚を使ったものを選びましょう。',
      en: 'Retort-packed food requiring no cooking is available in a variety of types. As meals in times of disaster are prone to nutritional imbalance, please select retort food containing meat or fish from which proteins can be taken in.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0.8,
      child1Female: 0.8,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3uz15T4',
      rakuten: 'https://bit.ly/2NlpPNX',
      amazon: 'https://amzn.to/3umnuTy'
    }
  },
  {
    id: 4,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '缶詰(さばの味噌煮、野菜など)',
      en: 'Canned food'
    },
    unit: {
      ja: '缶',
      en: 'cans'
    },
    description: {
      ja: '缶詰は保存食の王様。種類も豊富で味も良く、日常に欠かせない食材でもあります。家族の好みや栄養バランスを考え、たんぱく質が取れるお肉やお魚、豆類の缶詰を選びましょう。缶切りも忘れずに。',
      en: "Canned food is the king of preserved food. Rich in variety and tasty, it is an indispensable food item for daily use as well. You are advised to select canned meat, fish, or beans that help you take in proteins while considering each family member's favorite food and nutritional balance. Don't forget to have a can opener in place."
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0.8,
      child1Female: 0.8,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/2P4hFda',
      rakuten: 'https://bit.ly/3bpsGOZ',
      amazon: 'https://amzn.to/3dzJFPU'
    }
  },
  {
    id: 5,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '栄養補助食品',
      en: 'Dietary supplements'
    },
    unit: {
      ja: '箱',
      en: 'packs'
    },
    description: {
      ja: '食料不足になる災害時は、必要な栄養を食材で取れるとは限りません。サプリメントのほか、必要な栄養が詰まったバランス栄養食は、災害時、十分な調理ができないときでも手軽に栄養補給できます。',
      en: 'When natural disasters strike, people would not be able to have enough nutrition from food. Therefore, make sure to have some nutrition bars or supplements to take enough nourishment even though people are under emergency.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0.8,
      child1Female: 0.8,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/2ZG5JQL',
      rakuten: 'https://bit.ly/2NPiohw',
      amazon: 'https://amzn.to/3kbsKoc'
    }
  },
  {
    id: 6,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '野菜ジュース',
      en: 'Vegetable juice'
    },
    unit: {
      ja: '本',
      en: 'packs'
    },
    description: {
      ja: 'ジュースで野菜不足を解消。ミネラルやビタミンが摂取できます。冷凍保存することで、保冷剤としても使えます。',
      en: 'Vegetable juice helps to take minerals and vitamins. It is also useful as an ice pack by keeping it in the freezer.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0.8,
      child1Female: 0.8,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3c7WrmB',
      rakuten: 'https://bit.ly/3dvmgPM',
      amazon: 'https://amzn.to/2Nll72J'
    }
  },
  {
    id: 7,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: 'チーズ・プロテインバー等',
      en: 'Cheese & protein bars'
    },
    unit: {
      ja: 'パック',
      en: 'packs'
    },
    description: {
      ja: '被災地で支援物資として配られる食料は炭水化物が中心で、たんぱく質やビタミンといった栄養素が不足しがちです。健康を維持するためにも、チーズやプロテインバーといった高タンパクで保存可能な食料をストックしておくと安心です。',
      en: 'Food handed out as relief supplies in disaster-affected areas is primarily carbohydrates, tending to lack in such nutrients as proteins and vitamins. If only to maintain sound health, you will have peace of mind by keeping in stock high-protein preservative food such as cheese and protein bars.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3pRfEhi',
      rakuten: 'https://bit.ly/30nYCwW',
      amazon: 'https://amzn.to/3kcpB7N'
    }
  },
  {
    id: 8,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '健康飲料粉末',
      en: 'Powdered healthy drinks'
    },
    unit: {
      ja: '袋',
      en: 'packs'
    },
    description: {
      ja: '食料不足になる災害時は、必要な栄養を食材で取れるとは限りません。サプリメントのほか健康飲料の粉末などは、調理ができないときや疲れて食べ物がのどを通らないときでも、手軽に栄養補給できます。',
      en: 'In times of disaster when food is in short supply, you cannot always take in necessary nutrients from foodstuffs. Beside nutritional supplements, powdered healthy drinks, etc. enable you to receive nutritional support readily even when cooking is impossible or you are too tired to get food down your throat.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0.8,
      child1Female: 0.8,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/2NSeF2M',
      rakuten: 'https://bit.ly/3kbt1Y6',
      amazon: 'https://amzn.to/2NrnJvG'
    }
  },
  {
    id: 9,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '調味料セット',
      en: 'Set of seasonings'
    },
    unit: {
      ja: '適宜',
      en: 'As needed'
    },
    description: {
      ja: '料理に欠かせない調味料。野菜がたくさん入ったソースは、いろいろな食材に合う万能調味料です。',
      en: 'Seasoning is necessary in cooking. Sauce with a lot of vegetables is versatile seasoning for it could match with many kinds of ingridients.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3bydBcv',
      rakuten: 'https://bit.ly/37AhMDA',
      amazon: 'https://amzn.to/3k9rvGd'
    }
  },
  {
    id: 10,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '乾麺 即席麺',
      en: 'Dried or instant noodles'
    },
    unit: {
      ja: 'パック',
      en: 'packs'
    },
    description: {
      ja: '災害時はご飯やパンが中心になるので、乾麺があるとメニューに変化をつけられます。賞味期限が長いので長期保存でき、冷めてもおいしく食べられます。普段食べているものを少し多めにストックしておきましょう。',
      en: 'In times of disaster, you depend mainly on rice or bread for meals. Dried noodles can accent your menu for variety. As they last long, you can preserve them for a long time and can taste them good eaten cold. You are advised to keep in stock a bit more of what you eat regularly.'
    },
    url: {
      yahoo: 'http://bit.ly/37Enbtf',
      rakuten: 'http://bit.ly/3qKhkKI',
      amazon: 'http://amzn.to/2P4TZFB'
    }
  },
  {
    id: 11,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '無洗米',
      en: 'Pre-washed rice'
    },
    unit: {
      ja: 'kg',
      en: 'kg'
    },
    description: {
      ja: '災害時に無洗米があると水の節約になります。おかゆは乳幼児や高齢者の食事としても使えます。',
      en: 'If pre-washed rice is available in times of disaster, it helps to save water. Porridge is useful as meals for babies/infants and elderly people.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0.3,
      child1Female: 0.3,
      child2Male: 0.375,
      child2Female: 0.375,
      adultMale: 0.375,
      adultFemale: 0.375,
      agedMale: 0.375,
      agedFemale: 0.375
    },
    url: {
      yahoo: 'https://bit.ly/3unFi0u',
      rakuten: 'https://bit.ly/3bs8KK1',
      amazon: 'https://amzn.to/3aEBTm7'
    }
  },
  {
    id: 12,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '飲み物',
      en: 'Drinks'
    },
    unit: {
      ja: '本',
      en: 'bottles'
    },
    description: {
      ja: '水以外に、自分が普段好んで飲んでいる飲料があれば用意しておきましょう。災害時であっても、普段通りに自分の好きなものを飲んだり食べたりできる環境をつくっておくことが大切です。',
      en: 'If there are favorite drinks other than water you routinely consume, it is recommended to keep them in stock. It is important to have in place an environment where you can drink and eat what you like as usual even at the time of disaster.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0.8,
      child1Female: 0.8,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'http://bit.ly/3bw0ubZ',
      rakuten: 'https://bit.ly/2ZGHUbE',
      amazon: 'http://amzn.to/3dCp2Tc'
    }
  },
  {
    id: 13,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: 'お菓子',
      en: 'Confectionery'
    },
    unit: {
      ja: 'パック',
      en: 'packs'
    },
    description: {
      ja: 'お菓子は栄養価を考えて選ぶのがベター。米菓子は栄養素が豊富。ようかんは高齢者も食べやすく、気軽に口に入れられる一口サイズのものがおすすめ。乾燥野菜や果物のスナックチップスでビタミン補給。いずれも、保存の効く個別包装のものがおすすめです。避難生活が長引くときには気分転換にもつながります。',
      en: 'It is better to choose confectionery in consideration of nutritional value. Rice biscuits are rich in nutritional elements. Yokan (jellied azuki bean paste) is easy for elderly people to eat, and bite-size pieces readily put into the mouth are recommended. Vitamins can be supplemented with snack food chips of dried vegetables and fruit. Recommendable are individually packed items that can be preserved long. They also help for a change when refugee life is prolonged.'
    },
    url: {
      yahoo: 'http://bit.ly/2NQAyj4',
      rakuten: 'https://bit.ly/3se4nc8',
      amazon: 'http://amzn.to/2P4BTU8'
    }
  },
  {
    id: 14,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '果物の缶詰',
      en: 'Canned food (fruit)'
    },
    unit: {
      ja: '缶',
      en: 'cans'
    },
    description: {
      ja: '果物でビタミンや水分を摂取。缶詰でない場合は、包丁を使わずに済むミカンやバナナ、日持ちのするリンゴや梨、ブドウやスイカもおすすめです。',
      en: 'You can take in vitamins and water from fruit. If not canned, it is recommendable to eat "mikan" mandarin oranges and bananas, which do not require kitchen knives, and apples, pears, grapes and watermelons, which stay good for a long time.'
    },
    url: {
      yahoo: 'http://bit.ly/3siDfc7',
      rakuten: 'https://bit.ly/3ulh3Qu',
      amazon: 'http://amzn.to/3bx8E3H'
    }
  },
  {
    id: 15,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '感染対策／断水（衛生対策）',
      en: 'Infection control, water outage (sanitary measures)'
    },
    item: {
      ja: '除菌ウェットティッシュ',
      en: 'Antibacterial wet tissue'
    },
    unit: {
      ja: '枚',
      en: 'sheets'
    },
    description: {
      ja: '災害時には水が不足し、手を洗ったり拭き掃除をしたりすることが気軽にできなくなります。除菌タイプのウェットティッシュがあれば手指やテーブル、キッチンやトイレ回りなどの汚れを拭きとるのに使えます。',
      en: 'You run short of water supply in times of disaster, making it impossible to casually wash your hands or wipe something clean. If you have antibacterial wet tissue in place, you can use it to clean fingers, tables, kitchens, and washrooms.'
    },
    required: {
      infantsMale: 10,
      infantsFemale: 10,
      child1Male: 10,
      child1Female: 10,
      child2Male: 10,
      child2Female: 10,
      adultMale: 10,
      adultFemale: 10,
      agedMale: 10,
      agedFemale: 10
    },
    url: {
      yahoo: 'https://bit.ly/3aJAiLE',
      rakuten: 'https://bit.ly/3kbxSIY',
      amazon: 'https://amzn.to/2ZGKTRg'
    }
  },
  {
    id: 16,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '感染対策／断水（衛生対策）',
      en: 'Infection control, water outage (sanitary measures)'
    },
    item: {
      ja: 'アルコールスプレー',
      en: 'Alcohol sanitizer spray'
    },
    unit: {
      ja: '本',
      en: 'bottle'
    },
    description: {
      ja: '水道が止まっている時の手洗いや食器を拭くのに活用します。アルコールには消臭効果もあるため、ニオイが気になるところに吹きかけるといった使い方もできます。さらに、現在のコロナ禍での感染症対策としても効果を発揮します。',
      en: 'Used for cleaning hands or tableware during water outage. As alcohol has deodorizing effects, you can use it for spray on bad-smelling places, for example. Moreover, the product is effective as well for use as disinfectant spray amid the current COVID-19 epidemic.'
    },
    required: {
      infantsMale: 0.1,
      infantsFemale: 0.1,
      child1Male: 0.1,
      child1Female: 0.1,
      child2Male: 0.1,
      child2Female: 0.1,
      adultMale: 0.1,
      adultFemale: 0.1,
      agedMale: 0.1,
      agedFemale: 0.1
    },
    url: {
      yahoo: 'https://bit.ly/3ke9ZAw',
      rakuten: 'https://bit.ly/3pKeaVT',
      amazon: 'https://amzn.to/3ulqoYz'
    }
  },
  {
    id: 17,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '感染対策',
      en: 'Infection control'
    },
    item: {
      ja: 'マスク',
      en: 'Face mask'
    },
    unit: {
      ja: '枚',
      en: 'masks'
    },
    description: {
      ja: '感染症対策として飛沫感染を防ぐほかに、周囲への飛沫の拡散を防ぐためにも、コロナ禍の今、エチケットとして必要です。また、鼻づまりで口呼吸になっている場合にも、口の乾燥を防いでくれるため、冬場の乾燥対策としても有効です。',
      en: "Besides preventing droplet infection as a means of combating infectious diseases, masks are necessary as etiquette to fend off the spread of droplets to people nearby in today's age of the COVID-19 epidemic. Masks are also effective as a means of protection from dryness in winter as they help to prevent dry mouth when forced into oral breathing by nasal congestion."
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3kfA5TM',
      rakuten: 'https://bit.ly/3pH5H5T',
      amazon: 'https://amzn.to/3sbuEb2'
    }
  },
  {
    id: 18,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '断水（衛生対策）',
      en: 'Water outage (sanitary measures)'
    },
    item: {
      ja: '口内洗浄液',
      en: 'Mouthwash'
    },
    unit: {
      ja: 'ml',
      en: 'ml'
    },
    description: {
      ja: '水道が使えず歯磨きができない場合に備えて、口内洗浄液を準備しておきましょう。お口の健康は体の健康にも影響します。水不足で口の中を清潔に保つことができないと、口の中の菌が体に悪影響を及ぼす可能性があります。特に肺炎になりやすい高齢者の方は注意が必要です。',
      en: 'Keep mouthwashes in stock in preparation for the inability to brush teeth due to the unavailability of tap water. Health of the mouth affects that of the body. If you fail to keep the mouth clean inside, intraoral bacteria may adversely affect the body. In  particular, elderly people prone to pneumonia require special attention.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 90,
      child1Female: 90,
      child2Male: 90,
      child2Female: 90,
      adultMale: 90,
      adultFemale: 90,
      agedMale: 90,
      agedFemale: 90
    },
    url: {
      yahoo: 'https://bit.ly/3dETPyS',
      rakuten: 'https://bit.ly/3ugkEPT',
      amazon: 'https://amzn.to/3aIB1Ng'
    }
  },
  {
    id: 19,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '医薬品',
      en: 'Medication'
    },
    item: {
      ja: '救急箱',
      en: 'First-aid kit'
    },
    unit: {
      ja: '箱',
      en: 'kit'
    },
    description: {
      ja: '災害時に備えて応急手当用品があると安心です。ばんそうこうやガーゼ、包帯、ピンセット、綿棒、爪切り、体温計、マスクなどを救急箱に備えておきましょう。',
      en: 'There is a possibility to get many kinds of injury. Make box for first-aid-kid and puck band-aid, gauze, bandage,tweezers, cotton swab, nail clippers, thermometer, and mask.'
    },
    url: {
      yahoo: 'https://bit.ly/2NuBw4N',
      rakuten: 'https://bit.ly/2Nm0iEk',
      amazon: 'https://amzn.to/3qKpmTE'
    }
  },
  {
    id: 20,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '医薬品',
      en: 'Medication'
    },
    item: {
      ja: '常備薬',
      en: 'Household medicine'
    },
    unit: {
      ja: '箱',
      en: 'box'
    },
    description: {
      ja: '軽い症状のときや、医師にかかるまでの応急的な処置を行うときに使えます。薬は災害時に手に入りにくくなるので、鎮痛薬、胃腸薬、風邪薬など、必要なものを揃えておきましょう。',
      en: 'Household medicine can be readily used when symptoms are mild or when applying first aid before consulting a doctor. As it becomes hard to get medicine at the time of disaster, it is recommended to keep in stock such drugs as painkillers, gastrointestinal medicine, and cold tablets.'
    }
  },
  {
    id: 21,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: 'ガス停止（調理）',
      en: 'Gas outage (cooking)'
    },
    item: {
      ja: 'カセットコンロ',
      en: 'Portable gas stove'
    },
    unit: {
      ja: '台',
      en: 'stove'
    },
    description: {
      ja: '電気やガスが止まってしまったときでも、カセットコンロがあれば安心です。停電の可能性も高いので、IHヒーターよりも役立ちます。お湯を沸かして温かい汁物などを作るためには、保温効果の高い鍋を用意することも重要です。',
      en: 'Even when electricity and gas supply is suspended, you will feel safe if you have a portable gas stove in place. It is more useful than an induction cooker due to the high possibility of a power failure. It is also important to have a pan ready for use, which is highly effective in keeping food warm, in order to boil water and cook something hot such as soup.'
    },
    url: {
      yahoo: 'https://bit.ly/3dzDI5H',
      rakuten: 'https://bit.ly/3kbNKLu',
      amazon: 'https://amzn.to/3pFlUIF'
    }
  },
  {
    id: 22,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: 'ガス停止（調理）',
      en: 'Gas outage (cooking)'
    },
    item: {
      ja: 'カセットボンベ',
      en: 'Gas canister'
    },
    unit: {
      ja: 'ガスコンロ1台につき1日4/3本',
      en: '4/3 per day per gas stove'
    },
    description: {
      ja: 'ボンベは多めに用意しましょう。使用期限は6～7年なので、少し多めに買いそろえ、使いながら買い足す、日常備蓄（ローリングストック）の一環として備えておきましょう。',
      en: "Let's keep more canisters in stock than usual. As a canister is good for six to seven years, it is recommended to buy more canisters than you need and purchase an additional one each time you use up an existing one as part of everyday stockpiling (known as a rolling stock method)."
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3kdzthr',
      rakuten: 'https://bit.ly/3dBMy2Y',
      amazon: 'https://amzn.to/37zFgsI'
    }
  },
  {
    id: 23,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '断水（節水・衛生対策）',
      en: 'Water outage (saving water, sanitary measures)'
    },
    item: {
      ja: 'ラップ',
      en: 'Plastic wrap'
    },
    unit: {
      ja: '本',
      en: 'piece'
    },
    description: {
      ja: '断水時、食器に被せれば汚れを防ぎ、洗わずに済みます。また、三角巾や包帯代わりにも使え、体に巻けば保温効果も期待できます。',
      en: "If you cover tableware with plastic wrap during a meal at the time of water outage, it prevents the tableware from getting dirty and you don't have to wash used plates, etc. Plastic wrap can also be used as an alternative to a sling or bandage and, if wrapped around the body, you can expect the effect of heat retention."
    },
    url: {
      yahoo: 'https://bit.ly/3bw8MR5',
      rakuten: 'https://bit.ly/3aHM1KJ',
      amazon: 'https://amzn.to/3k8i49W'
    }
  },
  {
    id: 24,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '断水（節水・衛生対策）',
      en: 'Water outage (saving water, sanitary measures)'
    },
    item: {
      ja: 'ポリ袋',
      en: 'Plastic bag'
    },
    unit: {
      ja: '箱',
      en: 'box'
    },
    description: {
      ja: '手に被せると応急手当時の感染防止に役立ちます。断水時には食材を入れて調理すれば衛生的です。ジッパー付きの袋はニオイの防止になるので、トイレごみなどは黒いごみ袋に入れジッパー付きの袋に入れましょう。防水なので、財布・貴金属の保管にも便利です。',
      en: 'If you put a plastic bag over your hand, it is helpful to prevent infections. It is hygienic to cook ingredients inside a plastic bag during water outage. Please put toilet filth, etc. into a black garbage bag and cover it in a resealable bag, which fends off bad odor. Being waterproof, such bags are also convenient to keep a wallet or precious metals.'
    },
    url: {
      yahoo: 'https://bit.ly/3aHObu0',
      rakuten: 'https://bit.ly/3uwJ6g2',
      amazon: 'https://amzn.to/3si2jjq'
    }
  },
  {
    id: 25,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '断水（節水・衛生対策）',
      en: 'Water outage (saving water, sanitary measures)'
    },
    item: {
      ja: 'ビニール手袋',
      en: 'Plastic gloves'
    },
    unit: {
      ja: '箱',
      en: 'box'
    },
    description: {
      ja: '手がしっかり洗えない状態で調理をしなければならない時に、ラテックス製などの使い捨てができる手袋があると便利です。トイレ掃除など、不衛生な物を扱う時にも役立ちます。',
      en: 'When you have to cook while you cannot wash your hands sufficiently, it is convenient to have disposable gloves such as latex ones ready for use. They are useful to handle unsanitary goods such as when cleaning the toilet.'
    },
    url: {
      yahoo: 'https://bit.ly/2NRCHv3',
      rakuten: 'https://bit.ly/2ZARiO2',
      amazon: 'https://amzn.to/3kauUUY'
    }
  },
  {
    id: 26,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '断水（節水）',
      en: 'Water outage (saving water)'
    },
    item: {
      ja: 'アルミホイル',
      en: 'Aluminum foil'
    },
    unit: {
      ja: '本',
      en: 'piece'
    },
    description: {
      ja: '断水時、調理器具にアルミホイルを敷くと汚さずに調理できます。また、お皿の形にすれば、使い捨ての食器としても使えます。ニオイを通さないので、防臭にも役立ちます。',
      en: 'During water outage, spread aluminum foil on kitchen utensils and you can cook without making them dirty. Also, aluminum foil shaped into a plate can be used as disposable tableware. Foil is useful for deodorization as well because it does not allow any smell to permeate.'
    },
    url: {
      yahoo: 'https://bit.ly/2NVaQd9',
      rakuten: 'https://bit.ly/3pFrlr3',
      amazon: 'https://amzn.to/3skyiiS'
    }
  },
  {
    id: 27,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: 'トイレ',
      en: 'Restroom'
    },
    item: {
      ja: 'トイレットペーパー',
      en: 'Toilet paper'
    },
    unit: {
      ja: 'ロール',
      en: 'rolls'
    },
    description: {
      ja: '断水が起きなくても、トイレットペーパーがなければトイレが使えません。切らすと不便で、トイレへの不安がますます強くなってしまいます。ティッシュペーパーの代わりとしても使えます。',
      en: 'Even if water outage does not occur, you cannot use the restroom without toilet paper. It is inconvenient if it runs out, further enhancing your worries over toileting problems. You can substitute toilet rolls for tissue paper as well.'
    },
    required: {
      infantsMale: 0.3,
      infantsFemale: 0.3,
      child1Male: 0.3,
      child1Female: 0.3,
      child2Male: 0.3,
      child2Female: 0.3,
      adultMale: 0.3,
      adultFemale: 0.3,
      agedMale: 0.3,
      agedFemale: 0.3
    },
    url: {
      yahoo: 'https://bit.ly/2P4iGlu',
      rakuten: 'https://bit.ly/3shOdP0',
      amazon: 'https://amzn.to/3ughvj3'
    }
  },
  {
    id: 28,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '断水（衛生対策）',
      en: 'Water outage (sanitary measures)'
    },
    item: {
      ja: 'ティッシュペーパー',
      en: 'Tissue paper'
    },
    unit: {
      ja: '箱',
      en: 'box'
    },
    description: {
      ja: '水を使えないと拭き取る作業も多くなります。汚れたお皿をティッシュで拭けば、水の節約にもなります。ウェットティッシュと同様に必需品です。',
      en: 'If water is not available, you will face many occasions of work to wipe off. Wiping used plates clean with tissue paper helps to save water. Tissue is an essential item along with wet tissue.'
    },
    required: {
      infantsMale: 0.33,
      infantsFemale: 0.33,
      child1Male: 0.33,
      child1Female: 0.33,
      child2Male: 0.33,
      child2Female: 0.33,
      adultMale: 0.33,
      adultFemale: 0.33,
      agedMale: 0.33,
      agedFemale: 0.33
    },
    url: {
      yahoo: 'https://bit.ly/3pKxAKc',
      rakuten: 'https://bit.ly/3sjErfA',
      amazon: 'https://amzn.to/3aJBQ8J'
    }
  },
  {
    id: 29,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電（照明）',
      en: 'Blackout (lighting)'
    },
    item: {
      ja: '懐中電灯',
      en: 'Flashlight'
    },
    unit: {
      ja: '灯',
      en: 'piece'
    },
    description: {
      ja: '夜間に災害が発生して停電した場合、家具やガラスが散乱した状態で部屋を歩くことは非常に危険です。誤ってけがをしてしまえば、自宅で生活ができなくなるおそれも。部屋の照明としては、ランタンも効果的です。倒れても火災を招くことがないので理想的です。',
      en: "It is extremely dangerous to walk inside rooms scattered with furniture and shards of broken glass after the breakout accompanied by disaster during the nighttime. If you accidentally get injured, you may not be able to live at home. As room lighting, lanterns are effective. It is ideal to have lanterns that don't cause a fire after falling down."
    },
    url: {
      yahoo: 'https://bit.ly/3buHFFZ',
      rakuten: 'https://bit.ly/3sjEw2S',
      amazon: 'https://amzn.to/37ANsZJ'
    }
  },
  {
    id: 30,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電（電源）',
      en: 'Blackout (power source)'
    },
    item: {
      ja: '乾電池',
      en: 'Dry battery'
    },
    unit: {
      ja: '単1～単4までのセット',
      en: 'Sets of D, C, AA and AAA size batteries'
    },
    description: {
      ja: '懐中電灯などを用意しても電池がなければ使うことができません。また、電池は突然切れるおそれもあります。災害時は電池の使用頻度も高まるので、少し多めに買いそろえ、使いながら買い足す、日常備蓄（ローリングストック）の一環として備えておきましょう。',
      en: 'You cannot use flashlights, etc. kept in stock if dry batteries are not available. Batteries may die suddenly. At the time of disaster, you are required to use batteries more often than usual. It is recommended to buy more batteries than you need usually, purchasing extra ones while using them as part of everyday stockpiling (known as a rolling stock method).'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/2ZG4ocH',
      rakuten: 'https://bit.ly/2ZDqPzh',
      amazon: 'https://amzn.to/3sdls6f'
    }
  },
  {
    id: 31,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電・ガス停止（防寒）',
      en: 'Blackout/gas outage (cold protection)'
    },
    item: {
      ja: '点火棒',
      en: 'Firing rod'
    },
    unit: {
      ja: '本',
      en: 'piece'
    },
    description: {
      ja: 'ろうそくや固形燃料に火をつける際など、火が必要な場合に重宝します。',
      en: 'A firing rod is invaluable when fire is required (e.g. lighting a candle and setting fire to solid fuel).'
    },
    url: {
      yahoo: 'https://bit.ly/3aMfGCN',
      rakuten: 'https://bit.ly/3bxpH5K',
      amazon: 'https://amzn.to/3shYV8s'
    }
  },
  {
    id: 32,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電・ガス停止（防寒）',
      en: 'Blackout/gas outage (cold protection)'
    },
    item: {
      ja: '使い捨てカイロ',
      en: 'Disposable body warmer'
    },
    unit: {
      ja: '個',
      en: 'pieces'
    },
    description: {
      ja: '寒いときの定番「カイロ」。冬の外出時、かばんの中に入れておくと、エレベーターに閉じ込められたときなどでも体を温めて生命維持につながります。カイロでレトルト食材を挟み、アルミブランケットやタオルで包めば、レトルト食品を温めることもできます。',
      en: 'Disposable hot pack is standard item in cold weather. If you keep it in your bag when you go out in winter, you can keep your body warm and maintain your life even when you are trapped in an elevator. You can also heat up pre-packeaged foods by clipping them with the disposable body warmer and wrapping it in an aluminium blanket or towel.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 2,
      child1Female: 2,
      child2Male: 2,
      child2Female: 2,
      adultMale: 2,
      adultFemale: 2,
      agedMale: 2,
      agedFemale: 2
    },
    url: {
      yahoo: 'https://bit.ly/3unPOor',
      rakuten: 'https://bit.ly/3kf2s4C',
      amazon: 'https://amzn.to/3bsmmov'
    }
  },
  {
    id: 33,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '断水（衛生対策）',
      en: 'Water outage (sanitary measures)'
    },
    item: {
      ja: '使い捨てコンタクトレンズ',
      en: 'Disposable contact lens'
    },
    unit: {
      ja: '1人1か月分',
      en: 'Equivalent of 1-month use'
    },
    description: {
      ja: '災害時にはきれいな水が手に入らず、消毒ができない場合があります。そんな時、使い捨てのコンタクトレンズがあると便利です。予備として眼鏡の用意があるとなおよいでしょう。',
      en: 'In times of disaster, no clean water is available sometimes, making disinfection impossible. On such an occasion, disposable contact lenses are useful. It will be even better to have a pair of glasses ready for use as a backup.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3sbpVGy',
      rakuten: 'https://bit.ly/37xjSUT',
      amazon: 'https://amzn.to/3k9FX0T'
    }
  },
  {
    id: 34,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電（電源）',
      en: 'Blackout (power source)'
    },
    item: {
      ja: '携帯電話 充電器',
      en: 'Backup battery for cell-phone'
    },
    unit: {
      ja: '携帯台数に合わせて用意',
      en: 'Stockpile extra batteries matching the number of cell-phones'
    },
    description: {
      ja: '携帯電話の性能が上がり継続して利用できる時間も長くなっていますが、それでも手元に携帯電話の充電器があると安心です。電池式やソーラー式など停電しても使えるものを用意しておきましょう。',
      en: 'The performance of cell-phones has grown better and the time of continued use has become long. But the availability of a battery charger for cell-phones on hand still makes you feel at ease. It is recommended to keep in stock a battery-operated charger or solar-power type that can be used during power outage.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'http://bit.ly/2NyMZjR',
      rakuten: 'http://bit.ly/3umczsN',
      amazon: 'https://amzn.to/3qQjWqk'
    }
  },
  {
    id: 35,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '工具類',
      en: 'Tools'
    },
    item: {
      ja: '布製ガムテープ',
      en: 'Cloth packing tape'
    },
    unit: {
      ja: '巻',
      en: 'pieces'
    },
    description: {
      ja: '傷口に清潔な布を当てた上でガムテープを巻けば止血ができます。また骨折時の添え木の固定にも。壁などに貼り伝言を書けば、家族などへの連絡メモとしても活用できます。',
      en: 'You can stop bleeding from a wound by placing a piece of clean cloth on the wound and covering it with gummed cloth tape. In the event of an arm or leg being broken, such a tape is also useful to immobilize a splint applied to the injured part. A slip of tape pasted on the wall, etc. can be used as a memo pad for notice to family members and other parties concerned.'
    },
    url: {
      yahoo: 'https://bit.ly/3bxGg1s',
      rakuten: 'https://bit.ly/3vbLl8X',
      amazon: 'https://amzn.to/3bvl2RQ'
    }
  },
  {
    id: 36,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '工具類',
      en: 'Tools'
    },
    item: {
      ja: '軍手',
      en: 'Work gloves'
    },
    unit: {
      ja: '組',
      en: 'pairs'
    },
    description: {
      ja: '防災用には、耐熱性、防刃性に優れた商品が適しており、がれきを取り扱う時や火を扱う調理時などに役立ちます。革手袋も有効です。',
      en: 'For anti-disaster use, gloves highly resistant to heat and blades are appropriate. They are useful when removing debris or cooking with the use of fire. Leather gloves are also effective.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/37FzdCJ',
      rakuten: 'https://bit.ly/37BXlpW',
      amazon: 'https://amzn.to/2MhjfHE'
    }
  },
  {
    id: 37,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: 'トイレ／停電・ガス停止（防寒）',
      en: 'Restroom, blackout, gas outage (cold protection)'
    },
    item: {
      ja: '新聞紙',
      en: 'Newspaper'
    },
    unit: {
      ja: '適宜',
      en: 'As needed'
    },
    description: {
      ja: '新聞紙には保温効果があるため、体に巻いて温めることが可能です。水分を良く吸い、防臭効果もあるため、断水時のトイレ処理にも活用できます。',
      en: 'As newspaper sheets have the effect of heat retention, it is possible to warm the body by wrapping them around it. Having the effects of absorbing water and preventing bad smell, newspaper can also be used to dispose of excrement during water outage.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3qRGNC4',
      rakuten: 'https://bit.ly/2NMscJt',
      amazon: 'https://amzn.to/2ZKftJH'
    }
  },
  {
    id: 38,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電（情報収集）',
      en: 'Blackout (info collection)'
    },
    item: {
      ja: '手回し充電式などのラジオ',
      en: 'Radio (hand-cranked type, battery-powered, etc.)'
    },
    unit: {
      ja: '台',
      en: 'unit'
    },
    description: {
      ja: '停電時にはテレビが使えず、ラジオが貴重な情報源になります。ポケットラジオならコンパクトなのでポケットやかばんに入れて持ち運べるほか、枕元に置いてもじゃまになりません。省電力で電池の持ち時間も長いので災害時にも安心です。',
      en: 'In case of power outage, you cannot use a TV, but a radio becomes a precious source of information. A pocket radio is so compact as to be carried in the pocket or in a bag, and does not disturb your sleep when placed at your bedside. As it saves power and batteries last long, a radio assures you of peace of mind at the time of disaster.'
    },
    url: {
      yahoo: 'https://bit.ly/3aMfVxH',
      rakuten: 'https://bit.ly/3qJKTvU',
      amazon: 'https://amzn.to/2ZBAxCn'
    }
  },
  {
    id: 39,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: 'トイレ',
      en: 'Restroom'
    },
    item: {
      ja: '簡易トイレ',
      en: 'Portable toilet'
    },
    unit: {
      ja: '回分',
      en: 'time use'
    },
    description: {
      ja: '断水するとトイレは流せません。水が使えたとしても、集合住宅で配管が破損していた場合、汚水が逆流し下階のトイレからあふれる可能性もあります。トイレを我慢するために、食事や水を飲む量を減らすと、健康状態の悪化にもつながるので、家庭の便器に設置して固めて処理できる簡易トイレを用意しましょう。使用済の便袋は区市町村のゴミ収集方法に従って処理しましょう。',
      en: 'Once water supply is suspended, you cannot flush the toilet. Even if tap water is available, drainage piping may have been damaged, raising the possibility of sewage flowing back and overflowing in the washroom downstairs in the case of collective housing. If you reduce dietary and water intake to hold it, your health condition will worsen. So, keep in stock a portable toilet that can be installed on the lavatory seat for disposal of excrement in solid form. Follow municipal rules of garbage collection for disposal of used bags containing filthy matter.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 5,
      child1Female: 5,
      child2Male: 5,
      child2Female: 5,
      adultMale: 5,
      adultFemale: 5,
      agedMale: 5,
      agedFemale: 5
    },
    url: {
      yahoo: 'https://bit.ly/3qH8sW2',
      rakuten: 'https://bit.ly/2NxfG0p',
      amazon: 'https://amzn.to/3bsvklQ'
    }
  },
  {
    id: 40,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '工具類',
      en: 'Tools'
    },
    item: {
      ja: 'マルチツール',
      en: 'Multitool'
    },
    unit: {
      ja: '個',
      en: 'piece'
    },
    description: {
      ja: '調理用ナイフとしての活用ができるだけでなく、プライヤー付きであれば缶詰の直火調理の際につかむツールとしても使えます。',
      en: 'Multi tools knives can not only be utilized as a cooking knife, but if it comes with pliers, it can also be used as a grabbing tool when cooking canned food over an open flame.'
    },
    url: {
      yahoo: 'https://bit.ly/3aONPC1',
      rakuten: 'https://bit.ly/3dAooWp',
      amazon: 'https://amzn.to/3sep3Rq'
    }
  },
  {
    id: 41,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '断水（水の運搬）',
      en: 'Water outage (water transport)'
    },
    item: {
      ja: '給水袋',
      en: 'Water supply bag'
    },
    unit: {
      ja: '袋',
      en: 'bags'
    },
    description: {
      ja: '水道が復旧しない状況で、給水車に水をもらいに行くときに活用します。',
      en: 'When water supply has yet to be restored, this type of bag is used when you go get water from water trucks.'
    },
    required: {
      infantsMale: 1,
      infantsFemale: 1,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/37GX8BI',
      rakuten: 'https://bit.ly/3slwaYv',
      amazon: 'https://amzn.to/2NsdJm1'
    }
  },
  {
    id: 42,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電・ガス停止（防寒）',
      en: 'Blackout, gas outage (cold protection)'
    },
    item: {
      ja: 'ポータブルストーブ',
      en: 'Portable stove'
    },
    unit: {
      ja: '台',
      en: 'unit'
    },
    description: {
      ja: '電気・ガスが止まると暖房器具が使えなくなるため、冬に災害が起こった時の防災グッズとして、持ち運び可能なポータブルストーブが便利です。灯油やカセットボンベが燃料のものは、使用の際に換気が必要なので注意しましょう。',
      en: 'As heating appliances cannot be used when power and gas supply is suspended, it is convenient to have a portable stove among emergency supplies at the time of disaster in winter. Please exercise caution when using stoves fueled by heating oil or gas canister because they need air ventilation during use.'
    },
    url: {
      yahoo: 'https://bit.ly/3dDS8lm',
      rakuten: 'https://bit.ly/3uiKiDw',
      amazon: 'https://amzn.to/3shZ2ko'
    }
  },
  {
    id: 43,
    group: {
      ja: '女性用品',
      en: 'Women'
    },
    category: {
      ja: '女性',
      en: 'Women'
    },
    item: {
      ja: '生理用品',
      en: 'Sanitary products'
    },
    unit: {
      ja: '個セット',
      en: 'sets'
    },
    description: {
      ja: '災害時の避難生活で不足しがちなのが衛生用品。不足しているからといって長時間取り替えないでおくとかぶれの原因にもなります。普段使っているものを少し多めに買いそろえておきましょう。',
      en: 'Tending to be in short supply during refugee life in times of disaster are sanitary items. If not replaced for a long time because of short supply, it becomes a cause of rash. Keep in stock what you use routinely in quantity a little more than usual.'
    },
    url: {
      yahoo: 'https://bit.ly/3bzrXJE',
      rakuten: 'https://bit.ly/3aJFVd3',
      amazon: 'https://amzn.to/2NwhAP1'
    }
  },
  {
    id: 44,
    group: {
      ja: '女性用品',
      en: 'Women'
    },
    category: {
      ja: '女性',
      en: 'Women'
    },
    item: {
      ja: '基礎化粧品',
      en: 'Basic skin care products'
    },
    unit: {
      ja: '個',
      en: 'items'
    },
    description: {
      ja: '避難生活が長期化すると、いつも使っている化粧水や乳液がなくなってしまったり、買い足せなかったりすることが想定されます。乾燥や肌荒れを防ぐため、自分の肌に合う基礎化粧品をストックしておくと安心です。',
      en: 'If the disaster lasts, it is predicted that the daily skin-products may run out, and buying a new one may not be available. To precent dry skin or skin problems, it is better to stock the skin-care products that works on your skin.'
    },
    url: {
      yahoo: 'https://bit.ly/3uqOMYX',
      rakuten: 'https://bit.ly/2ZGOpv7',
      amazon: 'https://amzn.to/2NsVhK2'
    }
  },
  {
    id: 45,
    group: {
      ja: '乳幼児用品',
      en: 'Babies/infants'
    },
    category: {
      ja: '乳幼児',
      en: 'Babies/infants'
    },
    item: {
      ja: '粉ミルク スティックタイプ',
      en: 'Powdered milk (in stick-like pouch)'
    },
    unit: {
      ja: '食',
      en: 'servings'
    },
    description: {
      ja: '調乳の場合はスティックタイプの粉ミルクを備えておくと便利です。哺乳瓶の衛生を保つことが難しい場合には、使い捨ての紙コップで授乳することも一つの手です。',
      en: 'When preparring milk, it is convenient to have powderd infant formul. If it is difficult to maintain hygienic condition of baby bottle, feeding with disposable paper cup is one option.'
    },
    required: {
      infantsMale: 6,
      infantsFemale: 6,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 0,
      agedFemale: 0
    },
    url: {
      yahoo: 'http://bit.ly/3qXSOpe',
      rakuten: 'http://bit.ly/3sjr4M9',
      amazon: 'http://amzn.to/3uoTGFK'
    }
  },
  {
    id: 46,
    group: {
      ja: '乳幼児用品',
      en: 'Babies/infants'
    },
    category: {
      ja: '乳幼児',
      en: 'Babies/infants'
    },
    item: {
      ja: '液体ミルク',
      en: 'Liquid baby formula'
    },
    unit: {
      ja: '食',
      en: 'servings'
    },
    description: {
      ja: '調乳が不要な液体ミルクは、粉ミルクと併せて備えておくと便利です。粉ミルクは開封後1か月持ちますが、液体ミルクは開封後の飲み残しを捨てる必要があります。液体ミルクも未開封では常温で半年～1年の保管が可能ですので、災害時の手間を考え備蓄しておくとよいでしょう。',
      en: 'It is convenient to have liquid formula on hand, which requires no milk formulation, in addition to powdered formula. Although powdered formula is good for a month after opening the pack, it is necessary to discard the portion of liquid formula that is left unconsumed after opening. But unopened liquid formula can be preserved at room temperature for a half to full year, and you are advised to keep liquid formula in stock considering the time and effort required for milk preparation at the time of disaster.'
    },
    required: {
      infantsMale: 6,
      infantsFemale: 6,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 0,
      agedFemale: 0
    },
    url: {
      yahoo: 'https://bit.ly/3ur8gfI',
      rakuten: 'https://bit.ly/3ulvXGr',
      amazon: 'https://amzn.to/3aFnjus'
    }
  },
  {
    id: 47,
    group: {
      ja: '乳幼児用品',
      en: 'Babies/infants'
    },
    category: {
      ja: '乳幼児',
      en: 'Babies/infants'
    },
    item: {
      ja: 'アレルギー対応離乳食',
      en: 'Weaning food (allergy-free)'
    },
    unit: {
      ja: '食',
      en: 'meals'
    },
    description: {
      ja: '赤ちゃんは食べ慣れていないものを食べることができない場合があるので、普段食べている離乳食を用意しましょう。特にアレルギー対応食は手に入りにくくなるので、しっかり準備しておきましょう。食べた後も器の代わりにしたり、フタをして入れ物にしたりできる、瓶タイプの物がおすすめです。',
      en: 'As babies are sometimes unable to eat what they are not accustomed to, you are advised to have on hand baby food they usually take. Be prepared well in particular for allergy-free food which becomes difficult to obtain in times of disaster. As for containers of such food, it is recommended to have bottle types which can be substituted for tableware or which can be used as containers by putting a lid on them.'
    },
    required: {
      infantsMale: 3,
      infantsFemale: 3,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 0,
      agedFemale: 0
    },
    url: {
      yahoo: 'http://bit.ly/3unR6zQ',
      rakuten: 'http://bit.ly/2MmaNXG',
      amazon: 'http://amzn.to/3pMolZW'
    }
  },
  {
    id: 48,
    group: {
      ja: '乳幼児用品',
      en: 'Babies/infants'
    },
    category: {
      ja: '乳幼児',
      en: 'Babies/infants'
    },
    item: {
      ja: 'おむつ',
      en: 'Diapers'
    },
    unit: {
      ja: '個',
      en: 'piece'
    },
    description: {
      ja: '災害時にはおむつなどの衛生用品は手に入りにくく、支援物資として配られてもサイズが合わないことも。不足しているからといって長時間取り替えないでいると、かぶれの原因にもなります。普段使っているものを少し多めに買いそろえておきましょう。',
      en: 'In times of disaster, diapers and other sanitary items are hard to come by, and what is distributed as relief supplies may not fit right in size. If not replaced with a new one for a long time because of supply shortage, babies may develop rash. It is recommended to purchase a little more of what is used daily.'
    },
    required: {
      infantsMale: 10,
      infantsFemale: 10,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 0,
      agedFemale: 0
    },
    url: {
      yahoo: 'https://bit.ly/3aLhD2d',
      rakuten: 'https://bit.ly/3qMozSf',
      amazon: 'https://amzn.to/2MeacqX'
    }
  },
  {
    id: 49,
    group: {
      ja: '乳幼児用品',
      en: 'Babies/infants'
    },
    category: {
      ja: '乳幼児',
      en: 'Babies/infants'
    },
    item: {
      ja: 'お尻拭き',
      en: 'Baby wapes'
    },
    unit: {
      ja: 'パック',
      en: 'packs'
    },
    description: {
      ja: 'アルコールが入っていないので、ウェットティッシュとして大人が手や身体を拭いたり、テーブルなどを拭くときにも使えます。災害時に手に入りにくくなっても困らないように、普段使っているものを少し多めにストックしておきましょう。',
      en: 'Without alcoholic content, baby wipes can be used by adults as wet tissue to wipe their body or the table, etc. clean. To avoid being inconvenienced by short supply at the time of disaster, you are advised to keep in stock an extra amount of what you usually use.'
    },
    required: {
      infantsMale: 1,
      infantsFemale: 1,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 0,
      agedFemale: 0
    },
    url: {
      yahoo: 'https://bit.ly/3dHmGCD',
      rakuten: 'http://bit.ly/2ZAXw0g',
      amazon: 'http://amzn.to/2ZCi7Bx'
    }
  },
  {
    id: 50,
    group: {
      ja: '乳幼児用品',
      en: 'Babies/infants'
    },
    category: {
      ja: '乳幼児',
      en: 'Babies/infants'
    },
    item: {
      ja: '使い捨て哺乳瓶',
      en: 'Disposable baby bottle'
    },
    unit: {
      ja: '個',
      en: 'bottles'
    },
    description: {
      ja: '災害時に水道が使えず、哺乳瓶を洗うこともままならないという状況も考えられます。そのため、哺乳瓶も清潔に保てる使い捨てタイプのものを用意しておくことが重要です。',
      en: 'It is conceivable at the time of disaster that you may be unable to use tap water and not afford to wash baby bottles clean. It is therefore important to keep ready for use disposable bottles that can be kept clean.'
    },
    required: {
      infantsMale: 6,
      infantsFemale: 6,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 0,
      agedFemale: 0
    },
    url: {
      yahoo: 'https://bit.ly/3aLhDzf',
      rakuten: 'http://bit.ly/3aHBakc',
      amazon: 'http://amzn.to/3bryWEx'
    }
  },
  {
    id: 51,
    group: {
      ja: '高齢者用品',
      en: 'Elderly people'
    },
    category: {
      ja: '高齢者',
      en: 'Elderly people'
    },
    item: {
      ja: 'おかゆ',
      en: 'Porridge & other soft food'
    },
    unit: {
      ja: '食',
      en: 'packs'
    },
    description: {
      ja: '高齢者は、体内の水分量が少ないため、容易に脱水状態に陥る危険があります。体内の水分が失われると疲労感や食欲不振にもつながります。柔らかくて食べやすいレトルト食品や、濃厚流動食、とろみ剤なども活用しましょう。',
      en: "Elderly people are at risk of becoming dehydrated easily due to the low body water content. Loss of water content can lead to fatigue or loss of appetite. Let's utilize rice gruel or other soft food, high density liquid diet, and thicker."
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 3,
      agedFemale: 3
    },
    url: {
      yahoo: 'http://bit.ly/3uzdPJo',
      rakuten: 'http://bit.ly/3kdO4JL',
      amazon: 'http://amzn.to/2NLZBDX'
    }
  },
  {
    id: 52,
    group: {
      ja: '高齢者用品',
      en: 'Elderly people'
    },
    category: {
      ja: '高齢者',
      en: 'Elderly people'
    },
    item: {
      ja: '入れ歯洗浄剤',
      en: 'Denture cleaner'
    },
    unit: {
      ja: '錠',
      en: 'tablets'
    },
    description: {
      ja: '入歯洗浄剤がないと汚れが落ち切らず、細菌感染などのおそれがあります。水が不足している状況では、ウェットティッシュやハンカチなどを指に巻いて汚れを落とすことや、歯ブラシだけで時間をかけ丁寧に歯を磨いた後に少量の水で口をすすぐなども有効です。',
      en: 'Without a denture cleaner, stain fails to come off completely, raising the risk of bacterial infection. When water is in short supply, it is effective to remove stain with wet tissue or a handkerchief wrapped around fingers, or rinse your mouth with a small amount of water after taking time to brush dentures carefully with a toothbrush alone.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 0,
      child1Female: 0,
      child2Male: 0,
      child2Female: 0,
      adultMale: 0,
      adultFemale: 0,
      agedMale: 30,
      agedFemale: 30
    },
    url: {
      yahoo: 'https://bit.ly/3dEwkFZ',
      rakuten: 'https://bit.ly/3qECfi6',
      amazon: 'http://amzn.to/3boH5cW'
    }
  },
  {
    id: 53,
    group: {
      ja: '高齢者用品',
      en: 'Elderly people'
    },
    category: {
      ja: '高齢者',
      en: 'Elderly people'
    },
    item: {
      ja: '処方箋薬',
      en: 'Prescription drugs'
    },
    unit: {
      ja: '医師・薬剤師に相談',
      en: '*Consult doctor/pharmacist.'
    },
    description: {
      ja: '特に慢性的な疾患を持つ方等で、日常的に処方薬(注射薬等を含む。)を必要としている方は、手持ちの処方薬を切らさないよう、1週間程度のゆとりを持って定期的な受診を心がけましょう。',
      en: 'People who need medicine including injections on a daily basis, especcially those who have chronic illness, need to keep in mind to get looked at regularly in order no to run out of prescription drugs on hand.'
    }
  },
  {
    id: 54,
    group: {
      ja: '高齢者用品',
      en: 'Elderly people'
    },
    category: {
      ja: '高齢者',
      en: 'Elderly people'
    },
    item: {
      ja: '補聴器用電池',
      en: 'Battery for hearing aid'
    },
    unit: {
      ja: '2個で10日',
      en: '2 pieces per 10 days'
    },
    description: {
      ja: '補聴器用電池など特別なサイズの電池は手に入れるまでに時間がかかる場合がありますので、少し多めに買いそろえておきましょう。',
      en: "As it sometimes takes much time to obtain batteries for hearing aid  and other cells of special size, let's have slightly more batteries in stock than usual."
    },
    url: {
      yahoo: 'https://bit.ly/3pK71oG',
      rakuten: 'http://bit.ly/3boLPiK',
      amazon: 'http://amzn.to/37BxWge'
    }
  },
  {
    id: 55,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: 'フリーズドライ食品',
      en: 'Freeze-dried food'
    },
    unit: {
      ja: '適量',
      en: 'Appropriate quantity'
    },
    description: {
      ja: 'フリーズドライ食品は、少量のお湯で食べられ、災害時に不足しがちな野菜の栄養素が取れます。スープなので摂取しやすく副菜として用意しておくと有効です。たくさんの種類がありおいしいので普段の生活の中で定期的に食べながら、自分が好きな味のものをストックしましょう。',
      en: 'You can eat freeze-dried food in a small amount of hot water and take in nutritional elements of vegetables that tend to run short during a disaster. Coming in soup, it is easy to ingest and convenient if kept in stock as a side dish. As freeze-dried food is available in many varieties and delicious, keep your favorite types in stock while regularly consuming in daily life.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3pJHzj3',
      rakuten: 'http://bit.ly/3pByM2A',
      amazon: 'http://amzn.to/3pODyKk'
    }
  },
  {
    id: 56,
    group: {
      ja: '食品等',
      en: 'Food'
    },
    category: {
      ja: '食品',
      en: 'Food'
    },
    item: {
      ja: '乾物',
      en: 'Dry food'
    },
    unit: {
      ja: '適量',
      en: 'Appropriate quantity'
    },
    description: {
      ja: '乾物は保存期間が長く栄養素が豊富なので、栄養不足になりがちな災害時には有効な食材です。ミネラル・食物繊維が豊富な切り干し大根や寒天がおすすめです。',
      en: 'Being preserved long and rich in nutritional elements, dry food is an effective ingredient in times of disaster when you are prone to be undernourished. Recommendable are "kiriboshi-daikon" (dried strips of Japanese radish) and "kanten" (agar made from algae), both rich in dietary fiber.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3bBwrzQ',
      rakuten: 'https://bit.ly/3qMzrzq',
      amazon: 'http://amzn.to/2McyilM'
    }
  },
  {
    id: 57,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '断水（衛生対策）',
      en: 'Water outage (sanitary measures)'
    },
    item: {
      ja: '歯みがき用ウェットティッシュ',
      en: 'Teeth wipes'
    },
    unit: {
      ja: '枚程度',
      en: 'sheets(about)'
    },
    description: {
      ja: '断水により歯磨きができず口の中が不衛生になると、免疫力の低い高齢者や小さな子供は肺炎などの感染症にかかりやすくなります。歯みがき用のウェットティッシュでこまめに歯を拭き、口の中をきれいに保ちましょう。アルコールフリーなのでボディケアや食器拭きにも使えます。',
      en: 'If teeth cannot be brushed due to water outage and the mouth becomes unsanitary inside, elderly people and small children having weak immune systems are prone to pneumonia and other infectious diseases. Wipe the teeth clean frequently with wet tissue exclusive for brushing teeth and keep the mouth clean inside. Being free from alcohol, you can use such teeth wipes to clean the body or table.'
    },
    required: {
      infantsMale: 0,
      infantsFemale: 0,
      child1Male: 10,
      child1Female: 10,
      child2Male: 10,
      child2Female: 10,
      adultMale: 10,
      adultFemale: 10,
      agedMale: 10,
      agedFemale: 10
    },
    url: {
      yahoo: 'https://bit.ly/2NxfZbx',
      rakuten: 'http://bit.ly/3qMCKa6',
      amazon: 'http://amzn.to/3uoZcIg'
    }
  },
  {
    id: 58,
    group: {
      ja: '衛生用品',
      en: 'Hygiene products'
    },
    category: {
      ja: '断水（衛生対策）',
      en: 'Water outage (sanitary measures)'
    },
    item: {
      ja: 'ウェットボディタオル',
      en: 'Body wipes'
    },
    unit: {
      ja: '枚',
      en: 'sheets'
    },
    description: {
      ja: '水道やガスが止まりお風呂に入れなくなったときには、タオルなどで体を拭くことになります。一般的なウェットティッシュだと体を拭くには小さいので、厚手で背中が拭ける大判サイズのウェットタオルの準備をしておくと安心です。',
      en: 'When you cannot take a bath due to water and gas outage, you have no choice but to wipe the body with a towel, etc. Ordinary wet tissue is too small to do so, you are advised for peace of mind to keep in stock thick wipes big enough to clean the back.'
    },
    required: {
      infantsMale: 1,
      infantsFemale: 1,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'http://bit.ly/3qMeO6F',
      rakuten: 'http://bit.ly/2ZGgHG1',
      amazon: 'http://amzn.to/3btwYDL'
    }
  },
  {
    id: 59,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電（照明）',
      en: 'Blackout (lighting)'
    },
    item: {
      ja: 'LEDランタン',
      en: 'LED camping lantern'
    },
    unit: {
      ja: '最低3台',
      en: '3 units(at least)'
    },
    description: {
      ja: '向けた方向しか照らせず片手がふさがってしまう懐中電灯よりも、部屋全体を明るくできるため室内照明として有効です。家族が同時に使うリビング・キッチン・トイレに1個ずつ用意しましょう。光量が弱い場合は、ヘッドライトなどと使い分けて活用しましょう。',
      en: 'Rather than flashlights that can light a single direction only and keep one hand full, LED camping lights are more effective as room lighting because an entire room can be made luminous. It is recommended to have one lantern in place each for the living room, kitchen and restroom used simultaneously by family. When illumination is insufficient, use a headlamp, etc. together.'
    },
    url: {
      yahoo: 'https://bit.ly/3qLubfn',
      rakuten: 'https://bit.ly/2NJLkro',
      amazon: 'http://amzn.to/2ZBLIL5'
    }
  },
  {
    id: 60,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電（照明）',
      en: 'Blackout (lighting)'
    },
    item: {
      ja: 'ヘッドライト',
      en: 'Headlights'
    },
    unit: {
      ja: '個',
      en: 'unit'
    },
    description: {
      ja: '両手が空くヘッドライトは、料理や物を運ぶなど作業をする時に有効な照明です。家族各々が外出する時にも使うので、一人一個用意しましょう。',
      en: 'A headlamp, which leaves both hands free, is effective lighting when in work such as carrying dishes or goods with you. You are advised to have one headlamp in place for each family member as such lamps are used as well when family members go out individually.'
    },
    required: {
      infantsMale: 1,
      infantsFemale: 1,
      child1Male: 1,
      child1Female: 1,
      child2Male: 1,
      child2Female: 1,
      adultMale: 1,
      adultFemale: 1,
      agedMale: 1,
      agedFemale: 1
    },
    url: {
      yahoo: 'https://bit.ly/3bxqTpW',
      rakuten: 'https://bit.ly/2NT8ifW',
      amazon: 'http://amzn.to/2ZDtgll'
    }
  },
  {
    id: 61,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '停電（食材保存）',
      en: 'Blackout (foodstuff preservation)'
    },
    item: {
      ja: 'クーラーボックス',
      en: 'Cooler'
    },
    unit: {
      ja: '個',
      en: 'unit'
    },
    description: {
      ja: '停電で冷蔵庫が使えなくなったとき、一部の食材をクーラーボックスに移し保冷剤を一緒に入れれば、臨時の冷蔵庫として活用できます。冷蔵庫とクーラーボックスの併用により食材を無駄にせず、効率よく食べるようにしましょう。',
      en: 'When a fridge cannot be used due to a blackout, you can substitute a cooler as a makeshift fridge by transferring some foodstuff and adding an ice pack. It is recommended to avoid wasting foodstuff and eat efficiently by using a fridge and a cooler at the same time.'
    },
    url: {
      yahoo: 'https://bit.ly/3qLug2F',
      rakuten: 'http://bit.ly/37yHHvh',
      amazon: 'http://amzn.to/3pIaZ0W'
    }
  },
  {
    id: 62,
    group: {
      ja: '生活用品',
      en: 'Livingware'
    },
    category: {
      ja: '断水（水の運搬）',
      en: 'Water outage (water transport)'
    },
    item: {
      ja: 'リュックサック',
      en: 'Backpack'
    },
    unit: {
      ja: '個',
      en: 'unit'
    },
    description: {
      ja: '断水時には給水拠点などから水を運ぶ必要も出てきます。もし災害時にエレベーターが止まり、階段を使って運ばないといけないときは、リュックに大きめのポリ袋を被せ、その中に水を入れて運べば、ポリタンクよりも楽に運べます。集合住宅の上の階に住んでいる方に有効な方法です。水を入れて重たくなっても運べるような大きさを選びましょう。',
      en: 'When water supply is interrupted, it becomes necessary to carry water from a feeding base or elsewhere. In case an elevator is halted and you have to use stairs, you are advised to put a pretty big plastic bag into a backpack and pour water into it. You can carry water more easily than in a plastic container. It is an effective method for people living on upper floors of collective housing. Select the size of a backpack that can be carried with full of water.'
    },
    url: {
      yahoo: 'https://bit.ly/3ul3ZKW',
      rakuten: 'http://bit.ly/3pHDImz',
      amazon: 'http://amzn.to/3bwPcnV'
    }
  }
]

export const petStockpileList = [
  {
    id: 63,
    category: {
      ja: 'ペット',
      en: 'Pets'
    },
    item: {
      ja: 'ペットフード',
      en: 'Pet food (for at least 5 days)'
    },
    description: {
      ja: '災害時には人への支援が優先し、ペットフードの確保が困難になるケースがあります。大切なペットのためにも、飼い主の責任で、ペットフードをストックしておきましょう。',
      en: "In times of disaster, support for human beings takes precedence over anything else sometimes, making it difficult to secure pet food. Let's keep pet food in stock under the responsibility of owners for the sake of your precious pets as well."
    },
    url: {
      yahoo: 'http://bit.ly/3qKQPVf',
      rakuten: 'http://bit.ly/3qLX0Zm',
      amazon: 'http://amzn.to/3pGCqs5'
    }
  },
  {
    id: 64,
    category: {
      ja: 'ペット',
      en: 'Pets'
    },
    item: {
      ja: '水',
      en: 'Water (for at least 5 days)  for pets'
    },
    description: {
      ja: 'ペット用の水も考えてストックをしておきましょう。非常時はストレスから水を飲まなくなってしまう可能性も高いので、飲みやすい「軟水」を選ぶとよいでしょう。ミネラル分が多い硬水は、尿結石になる可能性があります。',
      en: 'It is recommended to keep water in stock for pets as well. Given a high possibility of pets stopping drinking water from stress in times of emergency, you are advised to choose "soft water" that is easy to drink. Hard water is rich in mineral content, possibly causing urinary tract stones.'
    },
    url: {
      yahoo: 'https://bit.ly/2Nt1CVQ',
      rakuten: 'http://bit.ly/3aI2TRA',
      amazon: 'http://amzn.to/3aHBHm7'
    }
  },
  {
    id: 65,
    category: {
      ja: 'ペット',
      en: 'Pets'
    },
    item: {
      ja: 'ペット用 首輪 リード',
      en: 'Spare collar/leash  for pets'
    },
    description: {
      ja: '災害時の混乱によって、ペットと離れ離れになる可能性もあります。ペットが保護された際に飼い主の元に戻れるよう、所有者が分かるようにしておくこともが重要です。',
      en: 'You may get separated from your pets amid confusion at the time of disaster. It is important to keep the identity of owners easily known to anyone so that pets may return to their owners when saved.'
    },
    url: {
      yahoo: 'http://bit.ly/3uiaBJY',
      rakuten: 'http://bit.ly/3qKfM3m',
      amazon: 'http://amzn.to/3swFwAP'
    }
  },
  {
    id: 66,
    category: {
      ja: 'ペット',
      en: 'Pets'
    },
    item: {
      ja: 'ペット用のトイレ用品',
      en: 'Toilet goods for pets'
    },
    description: {
      ja: '生活環境の衛生面を保つ上ではペットのトイレ事情も重要です。犬にはペットシーツ、猫には猫砂のように、ペットに合わせたトイレ用品を備蓄することで災害時の生活衛生面保全に努めましょう。',
      en: "Toilet conditions of pets are important to maintain good hygiene of the living environment. Let's try to keep the sanitary aspect of refugee life clean by keeping toilet goods for pets in stock in a manner that matches them (e.g. pet sheets for dogs and kitty litter for cats)."
    },
    url: {
      yahoo: 'http://bit.ly/3bw2zVl',
      rakuten: 'http://bit.ly/2P5REKv',
      amazon: 'http://amzn.to/2ZGnZth'
    }
  },
  {
    id: 67,
    category: {
      ja: 'ペット',
      en: 'Pets'
    },
    item: {
      ja: 'ペット用の食器',
      en: 'Eating utensils  for pets'
    },
    description: {
      ja: 'ペットフードが散らばるなどの衛生上の問題を防ぐため、食器のストックもしておきましょう。',
      en: "Let's keep eating utensils for pets in stock to prevent sanitary problems such as scattered pet food."
    },
    url: {
      yahoo: 'http://bit.ly/3dAYulh',
      rakuten: 'http://bit.ly/3qNfx7p',
      amazon: 'http://amzn.to/37EsGIm'
    }
  }
]
