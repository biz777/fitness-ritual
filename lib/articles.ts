export type Category = "nutrition" | "exercise" | "recipes";

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  publishedAt: string;
  readTime: number;
  content?: string; // HTML du corps de l'article (optionnel — absent = placeholder "coming soon")
}

export const categoryColors: Record<Category, string> = {
  nutrition: "#1B6B3A",  // vert foncé — ratio ~5.8:1 sur blanc ✅
  exercise:  "#B85C1A",  // orange foncé — ratio ~4.6:1 sur blanc ✅
  recipes:   "#1B6B3A",  // vert foncé — ratio ~5.8:1 sur blanc ✅
};

export const articles: Article[] = [
  {
    slug: "best-protein-sources-after-50",
    title: "Best protein sources for muscle retention after 50",
    description: "Why protein needs increase with age and which foods deliver the most without excess calories.",
    category: "nutrition",
    categoryLabel: "Nutrition & Diet",
    publishedAt: "2026-06-01",
    readTime: 7,
  },
  {
    slug: "20-minute-morning-routine",
    title: "The 20-minute morning routine that actually works",
    description: "A low-impact daily routine designed for joints, balance, and energy — no gym required.",
    category: "exercise",
    categoryLabel: "Exercise & Fitness",
    publishedAt: "2026-06-05",
    readTime: 6,
  },
  {
    slug: "high-fiber-dinner-recipes",
    title: "5 high-fiber dinner recipes under 500 calories",
    description: "Quick, satisfying meals that support digestion and help manage weight without feeling deprived.",
    category: "recipes",
    categoryLabel: "Healthy Recipes",
    publishedAt: "2026-06-08",
    readTime: 5,
  },
  {
    slug: "hydration-tips-over-50",
    title: "Why staying hydrated gets harder after 50 (and what to do)",
    description: "The science behind age-related dehydration and simple daily habits to stay properly hydrated.",
    category: "nutrition",
    categoryLabel: "Nutrition & Diet",
    publishedAt: "2026-06-10",
    readTime: 6,
  },
  {
    slug: "strength-training-beginners-50",
    title: "Strength training for beginners over 50: where to start",
    description: "A practical, no-intimidation guide to building muscle safely after 50 — at home or at the gym.",
    category: "exercise",
    categoryLabel: "Exercise & Fitness",
    publishedAt: "2026-06-12",
    readTime: 8,
  },
  {
    slug: "anti-inflammatory-breakfast",
    title: "7 anti-inflammatory breakfast ideas for people over 50",
    description: "Start your day with foods that reduce inflammation, support joints, and keep energy stable all morning.",
    category: "recipes",
    categoryLabel: "Healthy Recipes",
    publishedAt: "2026-06-14",
    readTime: 5,
  },
  {
    slug: "anti-inflammatory-diet-weight-loss-over-60",
    title: "Anti-Inflammatory Diet for Weight Loss Over 60",
    description: "A practical, science-backed guide to using an anti-inflammatory diet to support healthy, sustainable weight loss after 60.",
    category: "nutrition",
    categoryLabel: "Nutrition & Diet",
    publishedAt: "2026-07-22",
    readTime: 11,
    content: `
<p>If you're over 60 and feel like weight comes on more easily than it used to — even though you haven't changed how you eat — you're not imagining things. Your body's relationship with food, hormones, and inflammation shifts with age, and that shift can make weight management feel like an uphill battle.</p>

<p>The good news: an anti-inflammatory way of eating can help on both fronts. It's not a fad diet or a quick fix — it's a sustainable pattern built around whole, nutrient-dense foods, with less red meat and fried food, that calm chronic low-grade inflammation while naturally supporting a healthy weight. In this guide, we'll walk through what that looks like in practice, which foods to lean into and which to limit, how to build a week of meals around these principles, and what else — beyond the plate — makes a real difference after 60.</p>

<img src="/images/anti-inflammatory-diet-hero.webp" alt="Overhead view of anti-inflammatory foods including salmon, blueberries, spinach, walnuts, and olive oil on a wooden table" width="1200" height="899" loading="lazy" />

<p><em>This article is for general educational purposes and isn't a substitute for personalized medical advice. If you have a chronic condition or take medication, talk with your doctor before making significant changes to your diet.</em></p>

<h2>Why Inflammation and Weight Matter After 60</h2>

<p>Inflammation is a normal, healthy part of how your body heals and fights infection. The problem isn't inflammation itself — it's when it becomes chronic and low-grade, lingering in the background for months or years, sometimes detectable through markers like elevated C-reactive protein (CRP). Research has linked this kind of persistent, lingering response to age-related muscle loss, joint discomfort and arthritis, and a higher risk of conditions like type 2 diabetes and heart disease.</p>

<p>Weight gain and this lingering response often feed each other. Excess body fat, particularly around the abdomen, produces compounds that promote it. At the same time, it can interfere with how your body regulates hunger, blood sugar, and metabolism, making it harder to lose weight even when you're eating reasonably.</p>

<p>After 60, several natural changes tend to compound this cycle:</p>

<ul>
<li>Muscle mass naturally declines — a process called sarcopenia — which slows metabolism and can, in turn, be worsened by ongoing low-grade inflammation.</li>
<li>Hormonal shifts, including changes in estrogen, testosterone, and cortisol, can influence where and how fat is stored.</li>
<li>Activity levels often decrease, sometimes due to joint pain that this same process can worsen.</li>
</ul>

<p>Addressing it through diet — including small pleasures like a square of dark chocolate, valued for its polyphenol content — is one of the most accessible ways to interrupt this cycle, with no special equipment or extreme restriction required.</p>

<h2>Key Principles of an Anti-Inflammatory Diet</h2>

<p>You don't need to overhaul everything overnight. Small shifts, like cutting back on red meat and leaning into whole foods, add up. The core ideas are simple:</p>

<ul>
<li><strong>Favor whole foods over processed ones.</strong> Vegetables, fruits, whole grains, legumes, fish, and nuts come with fiber, antioxidants, and compounds that help calm inflammation. Processed foods often strip these out and add ingredients that promote it instead.</li>
<li><strong>Balance your plate.</strong> Aim for a mix of colorful vegetables, lean protein, healthy fats, and fiber-rich carbohydrates at most meals. The more color on your plate, the more antioxidants you're likely getting — and that variety also helps keep blood sugar steady, which matters since blood sugar swings are closely linked to inflammation.</li>
<li><strong>Prioritize healthy fats, limit the less helpful ones.</strong> Fatty fish, walnuts, and flaxseed are all good sources of omega-3s, which tend to support your anti-inflammatory goals. Excess omega-6 from heavily processed vegetable oils, when not balanced with omega-3s, can tip things the other way.</li>
<li><strong>Don't fear carbohydrates — choose them wisely.</strong> Whole grains, legumes, and vegetables provide fiber that feeds beneficial gut bacteria, which plays a role in regulating your body's inflammatory response.</li>
<li><strong>Stay adequately hydrated.</strong> Water supports the body's natural processes for managing inflammation, and even mild dehydration — more common with age — can affect energy and digestion.</li>
</ul>

<h2>Foods to Emphasize</h2>

<img src="/images/anti-inflammatory-foods-emphasize.webp" alt="Flat lay of anti-inflammatory foods for weight loss including leafy greens, berries, nuts, seeds, and legumes" width="924" height="776" loading="lazy" />

<p>Building meals around these food groups gives your body the raw materials it needs to calm inflammation and support gradual, sustainable weight loss:</p>

<ul>
<li><strong>Leafy greens and cruciferous vegetables</strong> — spinach, kale, broccoli, Brussels sprouts</li>
<li><strong>Berries</strong> — blueberries, strawberries, blackberries (rich in antioxidants called anthocyanins)</li>
<li><strong>Fatty fish</strong> — salmon, sardines, mackerel (excellent omega-3 sources)</li>
<li><strong>Extra virgin olive oil</strong> — a cornerstone of the well-studied Mediterranean eating pattern</li>
<li><strong>Nuts and seeds</strong> — walnuts, almonds, chia seeds, flaxseed</li>
<li><strong>Legumes</strong> — lentils, chickpeas, black beans (fiber and plant protein)</li>
<li><strong>Whole grains</strong> — oats, quinoa, brown rice, barley, valued for their fiber and steady energy release</li>
<li><strong>Herbs and spices</strong> — turmeric, ginger, garlic, cinnamon, prized for their antioxidant properties</li>
<li><strong>Green tea</strong> — a source of polyphenols associated with lower inflammatory markers in some studies</li>
</ul>

<p>A simple approach: try to make half your plate vegetables, a quarter lean protein, and a quarter whole grains or legumes, finished with a drizzle of olive oil.</p>

<h2>Foods to Limit or Avoid</h2>

<img src="/images/anti-inflammatory-foods-limit.webp" alt="Processed foods to limit on an anti-inflammatory diet, including white bread, pastries, soda, and deli meat" width="916" height="776" loading="lazy" />

<p>Certain foods and ingredients are more consistently linked to a heightened inflammatory response and can also make weight management harder:</p>

<ul>
<li>Refined carbohydrates — white bread, pastries, sugary cereals</li>
<li>Added sugars — sodas, candy, many packaged snacks and desserts</li>
<li>Fried foods and foods high in saturated or trans fats</li>
<li>Processed and cured meats — bacon, sausage, deli meats — along with frequent red meat consumption</li>
<li>Excess alcohol</li>
<li>Highly processed snack foods, often loaded with refined oils and long ingredient lists</li>
</ul>

<p>This isn't about perfection or never enjoying a treat again. It's about making these foods the exception rather than the everyday default.</p>

<h2>Meal Planning and Portion Guidance</h2>

<p>Portion control matters at any age, but after 60, calorie needs typically decrease somewhat due to lower muscle mass and activity levels — even as nutrient needs stay the same or increase. That makes nutrient density especially important: choosing foods rich in anti-inflammatory compounds and getting more vitamins, minerals, and fiber per calorie.</p>

<p>A few practical guardrails:</p>

<ul>
<li>Use a smaller plate to naturally moderate portions without obsessive counting.</li>
<li>Fill up on vegetables first — they add volume and nutrients with relatively few calories.</li>
<li>Include a source of protein at every meal to help preserve muscle mass.</li>
<li>Plan for 3 balanced meals and 1–2 small, protein- or fiber-rich snacks if needed, rather than grazing all day.</li>
<li>Cook in batches on days you have more energy, so staples like leafy greens and fresh herbs stay easy to reach for later in the week.</li>
</ul>

<h3>Sample 7-Day Meal Plan (Overview)</h3>

<p>This is a general framework, not a rigid prescription — adjust portions and swap foods based on your preferences, budget, and any dietary restrictions. Many of these meals lean on Mediterranean-style staples: olive oil, fish, legumes, and whole grains.</p>

<table>
<thead>
<tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th></tr>
</thead>
<tbody>
<tr><td>Mon</td><td>Oatmeal with walnuts and blueberries</td><td>Lentil soup with mixed greens</td><td>Baked salmon, roasted broccoli, quinoa</td></tr>
<tr><td>Tue</td><td>Greek yogurt with flaxseed and berries</td><td>Chickpea salad with olive oil dressing</td><td>Grilled chicken, steamed spinach, sweet potato</td></tr>
<tr><td>Wed</td><td>Veggie omelet with avocado</td><td>Turkey and vegetable soup</td><td>Baked cod, sautéed kale, brown rice</td></tr>
<tr><td>Thu</td><td>Smoothie with spinach, banana, chia seeds</td><td>Quinoa bowl with roasted vegetables</td><td>Lentil and vegetable stew</td></tr>
<tr><td>Fri</td><td>Whole grain toast with almond butter</td><td>Mixed bean salad</td><td>Grilled salmon, asparagus, wild rice</td></tr>
<tr><td>Sat</td><td>Oatmeal with cinnamon and nuts</td><td>Vegetable and chickpea curry</td><td>Turkey chili with beans</td></tr>
<tr><td>Sun</td><td>Vegetable frittata</td><td>Leftover chili or stew</td><td>Baked fish with roasted root vegetables</td></tr>
</tbody>
</table>

<p>Rotate proteins and vegetables to keep meals interesting, and don't hesitate to repeat favorites — consistency matters more than variety when you're building a sustainable habit.</p>

<h2>Physical Activity and Lifestyle Habits to Support Weight Loss</h2>

<img src="/images/anti-inflammatory-physical-activity.webp" alt="Active woman in her 60s walking outdoors as part of a healthy anti-inflammatory lifestyle" width="924" height="777" loading="lazy" />

<p>Diet is powerful, but it works best alongside a few complementary habits:</p>

<ul>
<li><strong>Strength training</strong>, even light resistance work 2–3 times a week, helps preserve muscle mass and keep metabolism steady.</li>
<li><strong>Regular movement</strong> — walking, swimming, or cycling — supports both weight management and circulation.</li>
<li><strong>Prioritizing sleep.</strong> Poor sleep is linked to elevated inflammatory markers and disrupted hunger hormones.</li>
<li><strong>Managing stress.</strong> Chronic stress raises cortisol, which can promote fat storage and a heightened inflammatory response over time — making stress management an often-overlooked piece of the puzzle.</li>
<li><strong>Staying socially and mentally engaged</strong>, which research associates with better overall health outcomes in older adults.</li>
</ul>

<p>Tracking what you eat and how your weight trends over time can help you notice patterns and stay motivated. A calorie and macro tracker like <a href="https://kalorix-nine.vercel.app" target="_blank" rel="noopener noreferrer">Kalorix</a>, designed with adults 40 and older in mind, can make this easier without adding complexity to your day.</p>

<h2>Special Considerations for People Over 60</h2>

<p>A few things worth keeping in mind at this stage of life:</p>

<ul>
<li>Protein needs may be higher than younger adults to help counteract natural muscle loss — many experts suggest spreading protein intake across meals rather than concentrating it at dinner.</li>
<li>Medication interactions matter. Some foods and supplements known for their effects on inflammation (like high-dose fish oil or turmeric) can interact with blood thinners or other medications — always check with your doctor or pharmacist.</li>
<li>Digestive changes are common with age; introducing more fiber gradually, with adequate water, helps avoid discomfort.</li>
<li>Bone health deserves attention alongside weight loss — make sure calcium and vitamin D intake remain adequate as you reduce calories.</li>
</ul>

<h2>Monitoring Progress and When to Seek Help</h2>

<img src="/images/anti-inflammatory-monitoring-progress.webp" alt="Person in their 60s reviewing a health journal with tea, reflecting a calm approach to monitoring weight loss progress" width="916" height="777" loading="lazy" />

<p>Weight loss after 60 is often slower and steadier than earlier in life, and that's normal. Rather than focusing solely on the scale, consider tracking:</p>

<ul>
<li>Energy levels and sleep quality</li>
<li>Joint comfort and stiffness</li>
<li>Waist circumference</li>
<li>How clothes fit</li>
<li>Blood markers such as cholesterol, blood sugar, and CRP, reviewed at routine checkups</li>
</ul>

<p>See a doctor if you experience unexplained rapid weight loss or gain, persistent fatigue, joint pain that worsens, or if you're considering major dietary changes while managing a chronic condition like diabetes, kidney disease, or heart disease.</p>

<h2>Common FAQs</h2>

<h3>What is an anti-inflammatory diet and how does it help weight loss over 60?</h3>
<p>It's an eating pattern built around unprocessed, plant-based foods — extra virgin olive oil, healthy fats, and antioxidant-rich fruits, vegetables, nuts, seeds, and herbs. After 60, this approach can help calm the body's inflammatory response, support metabolic health, and address one of the underlying factors that makes weight gain more likely — making weight loss safer and more sustainable.</p>

<h3>Which foods should I eat on an anti-inflammatory diet for older adults?</h3>
<p>Focus on whole, unprocessed staples: leafy greens, berries, fatty fish, legumes, whole grains, nuts, seeds, extra virgin olive oil, and modest amounts of canola oil for their unsaturated fats. Culinary herbs and spices like turmeric, ginger, garlic, and oregano add extra benefit. Consistency with this pattern matters more than any single food.</p>

<h3>Are there foods I should avoid because they trigger inflammation?</h3>
<p>Yes — highly processed foods, sugary beverages, refined grains, and some processed vegetable oils are consistently linked to a heightened inflammatory response and can contribute to weight gain over time, especially when they replace more nutrient-dense choices.</p>

<h3>How does inflammation affect disease risk and aging?</h3>
<p>Chronic, low-grade inflammation is associated with higher risk of several conditions, including cardiovascular disease and certain cancers. A broad body of research points to a connection between long-term inflammation and health outcomes as we age, which is part of why dietary approaches like the Mediterranean pattern or DASH diet — both known for supporting healthy blood pressure and blood sugar — are often recommended for long-term health.</p>

<h3>Can switching to an anti-inflammatory approach actually help with weight loss?</h3>
<p>Yes, though usually indirectly — by calming a response that can interfere with metabolism, and by replacing calorie-dense processed foods with nutrient-dense whole ones. Paired with physical activity and other healthy habits, this typically leads to gradual, sustainable weight loss rather than a quick drop.</p>

<h3>What role do antioxidants and free radicals play in inflammation?</h3>
<p>Free radicals are unstable molecules that can damage cells and contribute to a pro-inflammatory state. Antioxidants found in fruits, vegetables, nuts, and spices help neutralize free radicals, protecting tissues and supporting the overall benefits of this way of eating.</p>

<h3>Is extra virgin olive oil better than canola oil for inflammation?</h3>
<p>Extra virgin olive oil tends to come out ahead in research, thanks to its high monounsaturated fat and polyphenol content. Canola oil offers favorable unsaturated fats and can still fit into a healthy pattern, but olive oil generally shows stronger benefits.</p>

<h3>How does the typical American diet compare, and why might it be a problem?</h3>
<p>The standard American diet tends to be high in processed foods, refined sugar, and less favorable fats — a pattern linked to higher inflammation and disease risk. Shifting toward more whole, plant-based meals can meaningfully improve health outcomes, particularly for older adults.</p>

<h3>Are there dietary strategies to help with hypertension and chronic disease risk?</h3>
<p>Yes. The DASH diet, Mediterranean-style eating, and similar approaches that emphasize whole foods, plant-based meals, olive oil, and reduced sodium have solid evidence behind them for supporting healthy blood pressure and lowering long-term disease risk.</p>

<h3>How can I start an anti-inflammatory lifestyle after 60?</h3>
<p>Start small: prioritize whole, plant-based meals, cook with extra virgin olive oil, season with anti-inflammatory herbs and spices, and cut back on processed and sugary items. Combine these changes with regular movement and good sleep habits, and check with your doctor about any adjustments specific to your health needs.</p>

<h2>Resources and References</h2>

<p>This article draws on general principles supported by nutrition research on the Mediterranean and DASH dietary patterns, omega-3 fatty acids, and chronic inflammation. For personalized guidance, consult a registered dietitian or your physician.</p>

<p><em><strong>Medical Disclaimer:</strong> This content is for informational purposes only and is not intended as medical advice. Always consult a qualified healthcare provider before making changes to your diet, especially if you have an existing health condition or take medication. See our full <a href="/disclaimer">medical disclaimer</a> for details.</em></p>

    `,
  },
];

export function getArticlesByCategory(category: Category) {
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
