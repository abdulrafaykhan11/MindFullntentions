function showTab(tabId, el) {
  let tabs = document.querySelectorAll(".tab-content");
  let buttons = document.querySelectorAll(".pose-tabs button");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  el.classList.add("active");

  AOS.refresh();
}

// Dynamic Modal Logic
const poseData = {
  "sun-salutation": {
    title: "Sun Salutation A (Surya Namaskar A)",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
    description:
      "Surya Namaskar A (Sun Salutation A) is a powerful and elegant sequence of yoga postures that serves as the cornerstone of many Vinyasa and Hatha practices. This rhythmic flow involves twelve linked movements synchronized with the breath, designed to build internal heat, awaken the entire physical body, and clear the mind. Traditionally performed at sunrise, it is a comprehensive workout that opens the heart, strengthens the spine, and promotes a deep sense of vitality and presence.",
    benefits: [
      "Provides a complete full-body cardiovascular and muscular workout",
      "Significantly improves digestive system function and metabolic rate",
      "Reduces psychological stress and anxiety while improving mood",
      "Increases spinal flexibility and corrects structural imbalances",
      "Enhances lung capacity and improves blood oxygenation",
      "Builds lean muscle strength across the arms, core, and legs",
    ],
    steps: [
      "Begin in Mountain Pose (Tadasana), grounded and tall",
      "Inhale into Upward Salute (Urdhva Hastasana), reaching high",
      "Exhale into Standing Forward Fold (Uttanasana), hinging at hips",
      "Inhale for Halfway Lift (Ardha Uttanasana), lengthening spine",
      "Exhale into Chaturanga, lowering through plank with precision",
      "Inhale into Cobra or Upward Dog, opening the chest fully",
      "Exhale into Downward Dog, holding for several deep breaths",
    ],
    dos: [
      "Always move in perfect synchronization with your breath",
      "Keep your core muscles engaged to protect your lower back",
      "Spread your weight evenly through your hands and feet",
      "Listen to your body and modify the movements as needed",
    ],
    donts: [
      "Do not rush through the active transitions; move mindfully",
      "Avoid holding your breath even during the intense stretches",
      "Do not lock your joints tightly; keep a 'micro-bend'",
      "Avoid shrugging your shoulders toward your ears",
    ],
  },
  "spine-back": {
    title: "Spine & Back Health (Sushumna Flow)",
    image:
      "https://plus.unsplash.com/premium_photo-1661724211404-c49a5cfa6a80?q=80&w=1171&auto=format&fit=crop",
    description:
      "Sushumna Flow, or Spine & Back Health, is a comprehensive practice dedicated to the vital energy and structural integrity of your spinal column—the central axis of your body. Modern sedentary habits often lead to compressed vertebrae and chronic back discomfort. This sequence utilizes gentle traction, strategic rotations, and mindful extensions to decompress the spinal discs and strengthen the deep intrinsic muscles (multifidus and erector spinae) that support posture. By cultivating a flexible and strong spine, you ensure better nerve communication and long-term full-body mobility.",
    benefits: [
      "Provides significant relief from chronic lower and upper back pain",
      "Corrects structural spinal alignment and daily postural habits",
      "Decompresses the internal spinal discs for greater flexibility",
      "Strengthens the deep core muscles that stabilize the pelvic bowl",
      "Improves respiratory capacity by opening the thoracic spine",
      "Calms the central nervous system by clearing the spinal channel",
      "Promotes better circulation and blood flow to the spinal cord",
      "Increases the range of functional movement in the torso and hips",
    ],
    steps: [
      "Sit in a stable position with a vertical and long spine",
      "Inhale deeply to lengthen the crown of your head toward sky",
      "Practice gentle Pelvic Tilts to mobilize the lumbar spine",
      "Incorporate Cat-Cow flows to warm the entire posterior chain",
      "Perform a slow, seated spinal twist to release lateral tension",
      "Lower into Sphinx pose for a gentle, supported backbend",
      "End with a long-hold Child's pose to decompress the vertebrae",
    ],
    dos: [
      "Keep your shoulders relaxed and drawing away from the neck",
      "Maintain absolute mindfulness of every sensation in your back",
      "Breathe deeply into the spaces between each vertebra",
      "Engage your deep lower abdominals for constant spinal support",
      "Listen intently to your pain signals; always chose ease over force",
    ],
    donts: [
      "Do not push into any sharp, shooting, or localized sharp pain",
      "Avoid rounding your lower back into a 'C' shape; focus on length",
      "Do not hold your breath during the spinal rotations or twists",
      "Avoid sudden, jerky movements; always favor slow and controlled",
      "Do not ignore the body's signal to rest; stay within Ihre limits",
    ],
  },
  "mountain-pose-gen": {
    title: "Mountain Pose (Tadasana)",
    image:
      "https://images.unsplash.com/photo-1552286450-4a669f880062?q=80&w=880&auto=format&fit=crop",
    description:
      "Tadasana, or Mountain Pose, is arguably the most important foundational standing posture in yoga. It teaches the art of standing with integrity, balance, and centered awareness. By aligning the body from the ground up, it creates a sense of profound stability and presence, serving as the blueprint for all other standing poses. This practice effectively corrects postural habits, strengthens the lower body, and helps the practitioner find an internal sense of quiet strength and mountain-like stability.",
    benefits: [
      "Corrects posture and improves spinal alignment dramatically",
      "Strengthens the thighs, knees, ankles, and core muscles",
      "Firms the abdominal wall and gluteal muscles",
      "Relieves symptoms of flat feet and improves balance",
      "Provides mental clarity and reduces internal restlessness",
      "Teaches the body to stand with dignity and efficiency",
    ],
    steps: [
      "Stand with big toes touching and heels slightly separated",
      "Distribute your weight evenly across the four corners of your feet",
      "Engage your thigh muscles and lift your knee caps gently",
      "Tuck your tailbone slightly and engage your lower abdominals",
      "Roll your shoulders back and down, reaching fingertips toward the floor",
      "Inhale deeply, lengthening the neck and reaching the crown high",
    ],
    dos: [
      "Maintain a soft gaze straight ahead (Drishti)",
      "Keep your breath steady, even, and natural",
      "Lift the arches of your feet while grounding the toes",
      "Imagine a string pulling you upward from the crown of your head",
    ],
    donts: [
      "Do not lock your knees; keep them active but soft",
      "Avoid tensing your jaw or forehead muscles",
      "Do not allow your ribs to 'flare' out forward",
      "Avoid putting all your weight on your heels or toes",
    ],
  },
  "stress-relief": {
    title: "Stress Relief Flow (Shanti Sequence)",
    image:
      "https://www.flexifyme.com/blogs/wp-content/uploads/2024/07/Stress-Relief-Yoga-Poses.jpg",
    description:
      "In today's fast-paced world, finding moments of internal stillness is crucial for mental and physical health. This Stress Relief Flow is a carefully curated sequence of gentle, grounding postures that directly target the parasympathetic nervous system. By focusing on slow, rhythmic movements and extended exhales, this practice helps lower cortisol levels, quiet the 'monkey mind', and release deep physical tension stored in the hips, shoulders, and neck. It is a perfect evening practice to prepare the body for restful sleep and mental clarity.",
    benefits: [
      "Significantly lowers cortisol and general stress hormone levels",
      "Reduces symptoms of anxiety and chronic mental restlessness",
      "Improves emotional mood and boosts overall vital energy",
      "Promotes deeper, more restful sleep cycles and easier initiation",
      "Relieves physical tension in the most common stress-holding zones",
      "Encourages a state of mindfulness and present-moment awareness",
      "Lowers blood pressure and calms the cardiovascular system",
      "Improves the function of the digestive system under stress",
    ],
    steps: [
      "Begin with gentle neck rolls and shoulder shrugs to release upper tension",
      "Lower yourself into a wide-knee Child's Pose, forehead on the mat",
      "Transition into a slow, rhythmic Cat-Cow movement with long breaths",
      "Focus intensely on the sensation of air entering through the nose",
      "Perform a gentle seated twist to release the spinal column",
      "End the practice with at least 5-10 minutes of focused stillness",
      "Visualize tension leaving the body with every long exhalation",
    ],
    dos: [
      "Focus intensely on making your exhales longer than your inhales",
      "Keep your practice environment quiet and dimly lit if possible",
      "Be extremely gentle and patient with yourself throughout the flow",
      "Use props like pillows, blankets, or blocks for maximum comfort",
      "Allow your thoughts to pass like clouds without attaching to them",
    ],
    donts: [
      "Do not rush through the movements; stay as slow and steady as possible",
      "Avoid checking your phone or any digital devices during the practice",
      "Do not judge your thoughts; simply acknowledge and release them",
      "Avoid eating a heavy or spicy meal immediately before this practice",
      "Do not push your body into any pose that causes even mild discomfort",
    ],
  },
  "weight-loss": {
    title: "Weight Loss Yoga (Agni Flow)",
    image:
      "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?q=80&w=790&auto=format&fit=crop",
    description:
      "Yoga is a highly effective tool for healthy weight management when practiced with clinical consistency and intensity. This Weight Loss sequence focuses on 'Agni' (internal fire) through dynamic, high-energy flows that elevate the heart rate and boost the metabolic function. By incorporating challenging transitions, long muscular holds, and core-intensive movements, this practice turns the body into an efficient calorie-burning machine while simultaneously detoxifying the internal organs through deep compression and heat. It is designed to build immense physical heat and foster mental discipline.",
    benefits: [
      "Increases the basal metabolic rate and promotes sustainable fat loss",
      "Builds lean muscle mass for a toned, sculpted, and strong appearance",
      "Improves cardiovascular endurance and overall heart health",
      "Aids in deep internal detoxification and improves daily digestion",
      "Enhances body awareness and promotes mindful, conscious eating habits",
      "Builds immense physical stamina and unwavering mental determination",
      "Tones the abdominal organs and helps reduce visceral fat",
      "Balances the endocrine system which helps regulate appetite",
    ],
    steps: [
      "Begin with 5-10 rounds of Sun Salutations at a brisk, fluid pace",
      "Hold high-plank and side-plank variations for at least 45-60 seconds",
      "Incorporate dynamic power lunges and standing balance poses",
      "Maintain a strong, audible Ujjayi breath (ocean breath) throughout",
      "Combine the movements into a seamless, high-intensity rhythmic flow",
      "Include a series of core-focused Navasana (Boat pose) holds",
      "End with a short but intense cooling phase to stabilize metabolism",
    ],
    dos: [
      "Stay properly hydrated by drinking water before and after your practice",
      "Engage your deep core muscles fully even during the simpler transitions",
      "Push yourself to your 'growing edge' while always respecting your limits",
      "Focus on precision and alignment to maximize caloric energy usage",
      "Wear breathable, comfortable clothing that allows for full movement",
    ],
    donts: [
      "Do not sacrifice your safe alignment for the sake of speed or reps",
      "Avoid holding your breath, especially during the intense core work",
      "Do not skip the cool-down Savasana phase at the end of the session",
      "Avoid over-exercising early on; consistency wins over occasional intensity",
      "Do not practice on a full stomach; wait at least 2-3 hours after eating",
    ],
  },
  flexibility: {
    title: "Flexibility Improvement",
    image:
      "https://plus.unsplash.com/premium_photo-1683133269843-09a177048cef?q=80&w=1170&auto=format&fit=crop",
    description:
      "Flexibility is not just about touching your toes; it is about the health and longevity of your joints and connective tissues. This sequence is designed to progressively open the body's major muscle groups, including the hamstrings, hip flexors, and shoulders. By holding poses for longer durations and focusing on deep, oceanic breathing, practitioners can safely increase their range of motion, reduce physical rigidity, and improve the flow of blood and energy throughout the entire system. It is a vital practice for maintaining mobility as we age.",
    benefits: [
      "Significantly increases the functional range of motion in joints",
      "Reduces the risk of muscle strains and ligament injuries",
      "Improves general circulation and blood flow to tissues",
      "Relieves daily physical stiffness from sedentary work",
      "Enhances athletic performance and daily functional movement",
      "Promotes a deep sense of physical and mental spaciousness",
    ],
    steps: [
      "Begin with 10 minutes of light movement to warm the muscles",
      "Hold deep stretches for at least 45-90 seconds for tissue release",
      "Utilize yoga blocks or straps to maintain proper alignment",
      "Deepen each stretch only on a long, slow exhalation",
      "Focus your awareness on the areas of greatest resistance",
      "Maintain a steady, rhythmic breath even during discomfort",
    ],
    dos: [
      "Always listen to your body's specific limits for the day",
      "Ensure your muscles are warm before attempting deep stretches",
      "Keep your breath calm and steady to signal safety to the brain",
      "Focus on slow, progressive improvement over daily goals",
    ],
    donts: [
      "Do not 'bounce' or pulse during a static stretch (ballistic stretching)",
      "Avoid holding your breath, as this causes muscles to tighten",
      "Do not push into sharp, stabbing, or localized pain",
      "Avoid comparing your flexibility to others; focus on your journey",
    ],
  },
  "neck-shoulders": {
    title: "Neck & Shoulders Relief (Greeva Yoga)",
    image:
      "https://images.unsplash.com/photo-1579455150073-3a7974b46aa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmVjayUyMGFuZCUyMHNob3VsZGVyJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Greeva Yoga, or Neck & Shoulders Relief, is a specialized practice designed to liberate the upper body from the chronic tension of the digital age. Long hours spent looking at screens often lead to 'tech neck'—a condition characterized by a forward-leaning head and collapsed shoulders. This sequence systematically releases the trapezius, levator scapulae, and pectoral muscles to restore the natural cervical curve. By focusing on gentle range-of-motion exercises and heart-opening stretches, the practitioner can alleviate headaches, improve respiratory capacity, and regain a state of light, effortless uprightness.",
    benefits: [
      "Reduces the frequency and intensity of tension-based headaches",
      "Significantly improves cervical spine and shoulder joint mobility",
      "Corrects the 'Tech Neck' syndrome and rounded-shoulder posture",
      "Relieves deep-seated stiffness in the upper back and neck tissues",
      "Opens the heart center and broadens the collarbones for breathing",
      "Promotes mental clarity by releasing upper-body energy blocks",
      "Reduces stress-related jaw clenching and facial muscle tension",
      "Develops greater awareness of upper-body postural habits",
    ],
    steps: [
      "Sit tall and slowly tilt your right ear toward your right shoulder",
      "Roll your shoulders in wide, conscious circles in both directions",
      "Interlace your hands behind your back to stretch the chest open",
      "Perform mindful 'Chin Tucks' to strengthen the deep neck flexors",
      "Practice Eagle Arms (Garudasana arms) to stretch the upper back",
      "Inhale and reach your heart to the sky while keeping neck long",
      "Maintain a slow, steady Ujjayi breath throughout the sequence",
    ],
    dos: [
      "Move with absolute gentleness; the neck is a highly sensitive area",
      "Keep your jaw, forehead, and eyes completely soft and relaxed",
      "Stay focused on the sensation of length in the cervical spine",
      "Use your breath to 'melt' the areas of greatest physical resistance",
      "Take regular breaks during screen time to practice these movements",
    ],
    donts: [
      "Do not force your head into any position; let gravity do the work",
      "Avoid holding your breath, which signals tension to the brain",
      "Do not push into sharp, shooting, or electric-like sensations",
      "Avoid 'scrunching' your shoulders toward your ears during holds",
      "Do not rush; the upper body releases best with slow, steady focus",
    ],
  },
  "spine-back-stretch": {
    title: "Spine & Back Health (Sushumna Flow)",
    image:
      "https://plus.unsplash.com/premium_photo-1661724211404-c49a5cfa6a80?q=80&w=1171&auto=format&fit=crop",
    description:
      "Sushumna Flow, or Spine & Back Health, is a comprehensive practice dedicated to the vital energy and structural integrity of your spinal column—the central axis of your body. Modern sedentary habits often lead to compressed vertebrae and chronic back discomfort. This sequence utilizes gentle traction, strategic rotations, and mindful extensions to decompress the spinal discs and strengthen the deep intrinsic muscles (multifidus and erector spinae) that support posture. By cultivating a flexible and strong spine, you ensure better nerve communication and long-term full-body mobility.",
    benefits: [
      "Provides significant relief from chronic lower and upper back pain",
      "Corrects structural spinal alignment and daily postural habits",
      "Decompresses the internal spinal discs for greater flexibility",
      "Strengthens the deep core muscles that stabilize the pelvic bowl",
      "Improves respiratory capacity by opening the thoracic spine",
      "Calms the central nervous system by clearing the spinal channel",
      "Promotes better circulation and blood flow to the spinal cord",
      "Increases the range of functional movement in the torso and hips",
    ],
    steps: [
      "Sit in a stable position with a vertical and long spine",
      "Inhale deeply to lengthen the crown of your head toward sky",
      "Practice gentle Pelvic Tilts to mobilize the lumbar spine",
      "Incorporate Cat-Cow flows to warm the entire posterior chain",
      "Perform a slow, seated spinal twist to release lateral tension",
      "Lower into Sphinx pose for a gentle, supported backbend",
      "End with a long-hold Child's pose to decompress the vertebrae",
    ],
    dos: [
      "Keep your shoulders relaxed and drawing away from the neck",
      "Maintain absolute mindfulness of every sensation in your back",
      "Breathe deeply into the spaces between each vertebra",
      "Engage your deep lower abdominals for constant spinal support",
      "Listen intently to your pain signals; always chose ease over force",
    ],
    donts: [
      "Do not push into any sharp, shooting, or localized sharp pain",
      "Avoid rounding your lower back into a 'C' shape; focus on length",
      "Do not hold your breath during the spinal rotations or twists",
      "Avoid sudden, jerky movements; always favor slow and controlled",
      "Do not ignore the body's signal to rest; stay within Ihre limits",
    ],
  },
  "mountain-climbers": {
    title: "Mountain Climbers (Dhanurasana Variation)",
    image:
      "https://images.unsplash.com/photo-1544216717-3bbf52512659?q=80&w=1220&auto=format&fit=crop",
    description:
      "Mountain Climbers in a yoga context is a high-intensity, dynamic movement that bridges the gap between traditional static asana and metabolic conditioning. This pose challenges the entire core, strengthens the arms and shoulders, and significantly elevates the heart rate. By maintaining a stable plank foundation while explosively driving the knees toward the chest, practitioners develop functional agility, explosive power, and rhythmic breathing coordination. It is an exceptional way to build 'Tapas' (internal heat) and cleanse the body through sweat and increased circulation.",
    benefits: [
      "Rapidly increases cardiovascular endurance and metabolic rate",
      "Develops exceptional deep core stability and abdominal definition",
      "Strengthens the entire upper body, including wrists, arms, and shoulders",
      "Improves functional agility and full-body motor coordination",
      "Promotes internal detoxification through heat and intense circulation",
      "Builds mental stamina and the ability to stay calm under physical stress",
      "Tones the lower back and develops hip flexor flexibility",
      "Enhances full-body awareness and rhythmic breath control",
    ],
    steps: [
      "Begin in a rock-solid high plank position with hands under shoulders",
      "Engage your deep core and keep your spine in a neutral line",
      "Drive your right knee toward your chest with a quick, mindful motion",
      "Explosively switch legs, bringing the left knee in as you extend the right",
      "Maintain a steady, rhythmic breathing pattern throughout the movement",
      "Focus on keeping your hips level; avoid letting them hike or sag",
      "Push the floor away firmly with your entire palm and fingertips",
    ],
    dos: [
      "Maintain a flat, table-top back throughout the entire duration",
      "Keep your wrists directly stacked under shoulders for joint safety",
      "Land softly on your toes to minimize impact on your joints",
      "Focus your gaze slightly ahead of your hands to keep the neck long",
      "Coordinate each knee drive with a sharp, controlled exhalation",
    ],
    donts: [
      "Do not 'hike' your hips high into the air as the intensity rises",
      "Avoid shallow or narrow chest breathing; keep breaths deep",
      "Do not allow your lower back to sag toward the mat (protect the spine)",
      "Avoid looking back at your feet, as this rounds the neck and spine",
      "Do not lock your elbows; keep a subtle micro-bend for stability",
    ],
  },
  "cat-cow": {
    title: "Cat-Cow Stretch",
    image:
      "https://images.unsplash.com/photo-1599447421255-87bd3e57f722?q=80&w=1170&auto=format&fit=crop",
    description:
      "Cat-Cow (Chakravakasana) is a essential vinyasa that synchronizes breath with movement to warm up the spine and relieve tension throughout the torso. The rhythmic transition between flexion (Cat) and extension (Cow) massages the internal organs, stretches the back and abdominal muscles, and creates space between the vertebrae. It is often the first movement in a yoga practice, serving as a mindful bridge between the external world and internal awareness.",
    benefits: [
      "Significantly increases spinal flexibility and mobility",
      "Improves coordination and breath-to-movement synchrony",
      "Provides a gentle massage for the digestive organs",
      "Relieves stress and calms the central nervous system",
      "Corrects posture and balances the front and back body",
      "Warms up the entire torso for more advanced asana",
    ],
    steps: [
      "Begin in a neutral tabletop position on hands and knees",
      "Inhale (Cow): Drop the belly, lift the chest and tailbone",
      "Exhale (Cat): Round the spine toward the ceiling, tucking chin",
      "Repeat the sequence 5-10 times, moving slowly with breath",
      "Focus your awareness on each individual vertebra moving",
      "Maintain a soft micro-bend in the elbows",
    ],
    dos: [
      "Perfectly synchronize your movement with your breathing",
      "Focus on the subtle movement of each segment of the spine",
      "Keep your weight distributed evenly between hands and knees",
      "Allow your head and neck to follow the spine's natural curve",
    ],
    donts: [
      "Do not collapse your weight into your shoulder joints",
      "Avoid straining your neck by looking up or down too fast",
      "Do not hold your breath during the transitions",
      "Avoid rushing; the benefit is in the slow, mindful flow",
    ],
  },
  "cobra-pose-type": {
    title: "Cobra Pose (Bhujangasana)",
    image:
      "https://plus.unsplash.com/premium_photo-1682088278470-0a95814e846d?q=80&w=1170&auto=format&fit=crop",
    description:
      "Bhujangasana, or Cobra Pose, is a fundamental backbend that dynamically opens the heart and strengthens the entire back body. By gently lifting the chest while grounding the lower body, this pose counteracts the effects of prolonged sitting and improves spinal flexibility. It is known to stimulate the abdominal organs, improve respiratory function by opening the chest, and build a sense of internal courage and openness. It is an essential component of the Sun Salutation sequence.",
    benefits: [
      "Opens the heart and lungs to improve breathing capacity",
      "Strengthens the entire spinal column and supporting muscles",
      "Stimulates the digestive and reproductive organs",
      "Corrects slouching posture and improves upper-body alignment",
      "Relieves stress and fatigue while lifting the overall mood",
      "Firms the buttocks and tones the abdominal wall muscles",
    ],
    steps: [
      "Lie flat on your belly with the tops of your feet on the mat",
      "Place your hands under your shoulders with elbows tucked in",
      "Inhale deeply as you gently lift your chest off the floor",
      "Keep your lower ribs on the mat for a 'Baby Cobra' version",
      "Roll your shoulders back and down, away from your ears",
      "Hold for 15-30 seconds while maintaining deep, steady breath",
    ],
    dos: [
      "Keep a slight bend in your elbows; do not lock them",
      "Press the tops of your feet and thighs firmly into the mat",
      "Engage your core to protect your lower back from strain",
      "Gaze slightly forward or upward to keep the neck long",
    ],
    donts: [
      "Do not lock your elbows or 'dump' weight into your wrists",
      "Avoid 'crunching' the lower back by lifting too high too fast",
      "Do not hold your breath during the lift or the hold",
      "Avoid shrugging your shoulders near your ears",
    ],
  },
  "child-pose-type": {
    title: "Child's Pose (Balasana)",
    image:
      "https://plus.unsplash.com/premium_photo-1674675646725-5b4aca5adb21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Balasana, or Child's Pose, is the ultimate restorative sanctuary in yoga practice. This grounding posture offers a deep sense of safety and tranquility, allowing the practitioner to turn their awareness inward. By folding the torso over the thighs and resting the forehead on the mat, we gently stretch the hips, thighs, and ankles while relieving tension in the lower back and neck. It is a vital 'reset button' during intense yoga flows or stressful moments in daily life.",
    benefits: [
      "Provides deep mental tranquility and reduces stress instantly",
      "Gently stretches the hips, thighs, and ankle joints",
      "Relieves chronic tension in the lower back and spine",
      "Calms the central nervous system and lowers blood pressure",
      "Aids in a healthy digestive process through gentle compression",
      "Encourages a state of mindfulness and internal reflection",
    ],
    steps: [
      "Kneel on the floor and bring your big toes together to touch",
      "Sit back on your heels and separate your knees hip-width",
      "Exhale and fold your torso forward between your thighs",
      "Rest your forehead gently on the mat or a yoga block",
      "Extend your arms forward or rest them alongside your body",
      "Breathe deeply into the back of your ribs and lower back",
    ],
    dos: [
      "Allow your belly to relax completely between your thighs",
      "Focus on the sensation of your tailbone reaching toward your heels",
      "Breathe slowly and rhythmically into the back body",
      "Use this pose whenever you feel overwhelmed or tired",
    ],
    donts: [
      "Do not force your hips down if your knees feel uncomfortable",
      "Avoid holding tension in your neck or shoulder muscles",
      "Do not stay in the pose if you experience sharp knee pain",
      "Avoid 'crunching' your neck; keep your forehead grounded",
    ],
  },
  "seated-forward-fold": {
    title: "Seated Forward Fold (Paschimottanasana)",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1170&auto=format&fit=crop",
    description:
      "Paschimottanasana is a powerful seated forward fold that offers a deep, satisfying stretch for the entire back body—from the heels to the crown of the head. This pose is often referred to as the 'Gateway to Stillness' because of its profound calming effect on the nervous system. By folding inward, the practitioner can quiet mental noise, improve digestion, and release the deep-seated tension often stored in the hamstrings and lower back. It is a fundamental practice for building flexibility, patience, and inward focus.",
    benefits: [
      "Significantly increases flexibility in the hamstrings, calves, and back",
      "Deeply calms the brain and relieves mild depression and anxiety",
      "Stimulates the liver, kidneys, and pancreas for better detoxification",
      "Improves digestion and relieves symptoms of bloating and acidity",
      "Reduces fatigue and helps soothe tension headaches and stress",
      "Lengthens the entire spinal column and stretches back musculature",
      "Reduces obesity and tones the abdominal fat through compression",
      "Promotes a deep sense of internal surrender and tranquility",
    ],
    steps: [
      "Sit with your legs extended straight in front (Dandasana posture)",
      "Inhale deeply and reach your arms high to lengthen the spine",
      "Exhale and hinge forward from the hips, leading with your heart center",
      "Reach for your shins, ankles, or the outer edges of your active feet",
      "Keep your neck in line with your spine; avoid dropping the head",
      "Hold for 1-3 minutes, deepening the fold slightly with each exhale",
      "Breathe focus into the back of your lungs and lower spine",
    ],
    dos: [
      "Lead the folding movement with your chest rather than your head",
      "Keep your feet active with toes pointing upward toward your face",
      "Micro-bend your knees if your hamstrings feel excessively tight",
      "Maintain a long, flat back for as long as possible in the fold",
      "Focus on slow, rhythmic breathing to relax the deep tissues",
    ],
    donts: [
      "Do not 'pull' yourself down with arm force; use the breath to descend",
      "Avoid rounding your lower back excessively into a 'C' shape",
      "Do not force your head to touch your knees; keep length in neck",
      "Avoid locking your knees if you have hyper-mobility in joints",
      "Do not hold your breath during the intense moments of the stretch",
    ],
  },
  "core-strength": {
    title: "Core Strength Yoga (Nabhi Sequence)",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1170&auto=format&fit=crop",
    description:
      "Nabhi Yoga, or Core Strength Yoga, is a specialized series of practices meticulously designed to fire up and stabilize your physical and energetic center. Your core is more than just abdominal muscles; it is the vital bridge between your upper and lower body and the sanctuary of your internal organs. This sequence utilizes static holds, pelvic floor engagement (Mula Bandha), and dynamic resistance to build a functional 'corset' of strength around your spine. It is a powerful practice for anyone seeking better balance, improved posture, and a strong, resilient midsection.",
    benefits: [
      "Stiffens and stabilizes the entire spinal column for better health",
      "Firms and defines the deep transverse abdominal muscles",
      "Significantly improves physical balance and structural stability",
      "Supports chronic back health by reducing unnecessary strain",
      "Stimulates the digestive fire and internal metabolic processes",
      "Promotes a sense of internal centeredness and emotional power",
      "Enhances athletic performance in almost any other physical activity",
      "Lifts the protective energy around the solar plexus chakra",
    ],
    steps: [
      "Begin with a steady High Plank pose, engaging the full body",
      "Perform a series of Boat pose (Navasana) holds with straight back",
      "Incorporate Forearm Plank with gentle hip dips to target obliques",
      "Focus intensely on engaging the transverse abdominals with breath",
      "Practice lifting the pelvic floor (Mula Bandha) during all holds",
      "Maintain a steady, rhythmic breathing pattern through the effort",
      "End with a gentle abdominal stretch like a small Cobra pose",
    ],
    dos: [
      "Keep your neck in a neutral line with your moving spine",
      "Scoop your belly deeply toward your spine with every exhale",
      "Focus on the quality of your engagement rather than just duration",
      "Keep your heart lifted and chest open during seated core work",
      "Listen to your body and take short rests if form begins to fail",
    ],
    donts: [
      "Do not hold your breath; steady breathing is vital for core work",
      "Avoid sagging your hips in Plank poses (protect the lumbar spine)",
      "Do not pull on the back of your neck during abdominal exercises",
      "Avoid 'doming' the belly; keep the core drawing inward and flat",
      "Do not lock your joints; keep a soft awareness in elbows and knees",
    ],
  },
  "heart-health": {
    title: "Heart Health Yoga (Anahata Flow)",
    image:
      "https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?q=80&w=1172&auto=format&fit=crop",
    description:
      "Anahata Yoga, or Heart Health Yoga, is an invigorating sequence designed to support cardiovascular vitality and emotional openness. This practice uses a combination of gentle inversions, chest-opening backbends, and rhythmic breathing to improve blood circulation and reduce the physical effects of stress on the heart. By physically expanding the thoracic cavity, we encourage deeper lung capacity and a sense of profound compassion for oneself and others. It is a vital practice for maintaining a healthy heart and a peaceful, radiant spirit.",
    benefits: [
      "Significantly helps lower blood pressure and resting heart rate",
      "Promotes deep chest expansion and improved lung capacity",
      "Reduces psychological stress and its direct impact on the heart",
      "Boosts overall blood circulation and oxygenation to tissues",
      "Opens the heart-center (Anahata chakra) for emotional balance",
      "Relieves chronic upper body tension around the ribcage",
      "Encourages a sense of gratitude and internal peace",
      "Stimulates the thymus gland to support a healthy immune system",
    ],
    steps: [
      "Begin with rhythmic Sun Salutations to warm the blood flow",
      "Incorporate a stable Bridge pose to invite blood toward the heart",
      "Practice gentle spinal twists to clear the pathways of circulation",
      "Perform chest-opening postures like Camel or Sphinx mindfully",
      "Engage in long, deep Pranyama (breath work) for oxygenation",
      "End the practice with a heart-focused meditation for 5 minutes",
      "Focus your internal gaze on the light within the chest center",
    ],
    dos: [
      "Move with your heart open and your upper spine lengthening",
      "Maintain a steady, rhythmic breath like a calm heart beating",
      "Focus on the feeling of expansion during every inhalation",
      "Keep your shoulders broad and soft, away from your ears",
      "Visualize blood flowing smoothly and easily through your body",
    ],
    donts: [
      "Do not overexert yourself; the goal is vitality, not exhaustion",
      "Avoid holding your breath, especially during the inversions",
      "Do not push into deep backbends if your breath becomes shallow",
      "Avoid practicing if you have very high blood pressure (use modifications)",
      "Do not rush the cool-down; allow your heart rate to settle slowly",
    ],
  },
  "better-sleep": {
    title: "Better Sleep Yoga (Nidra Preparatory)",
    image:
      "https://plus.unsplash.com/premium_photo-1716025656382-cc9dfe8714a7?q=80&w=1170&auto=format&fit=crop",
    description:
      "Prepare your mind and body for the ultimate restorative experience with this gentle Sleep Yoga sequence. These calming postures are specifically selected to quiet the 'monkey mind' and signal to the nervous system that the day is complete. By focusing on slow, grounding movements and extended, sighing exhales, this practice helps facilitate the production of melatonin and reduces the cortisol lingering from a busy day. It is an essential ritual for anyone seeking to overcome insomnia or simply improve the quality of their nightly rest.",
    benefits: [
      "Relaxes every major muscle group in the entire body",
      "Quiets mental noise and stops the cycle of late-night thoughts",
      "Gently releases the physical tension accumulated during the day",
      "Promotes the natural production of sleep-inducing hormones",
      "Significantly improves the transition into deep REM sleep cycles",
      "Alleviates lower back pain and restless leg sensations",
      "Teaches the body how to enter a state of total surrender",
      "Calms the breathing pattern and stabilizes the heart rate",
    ],
    steps: [
      "Practice Legs-Up-the-Wall (Viparita Karani) for 5-10 minutes",
      "Hold a gentle Goddess pose with bolster support for 2-3 minutes",
      "Transition into a slow, seated forward fold to turn focus inward",
      "Focus intensely on slowing down and lengthening your exhales",
      "End the practice in Savasana (Corpse pose) with a warm blanket",
      "Perform a gentle body scan to systematically release tension",
      "Listen to the subtle sound of your breath until you drift off",
    ],
    dos: [
      "Use very soft, dim lighting or practice by candlelight",
      "Ensure your practice space is quiet, warm, and comfortable",
      "Listen to calming music or silence as per your preference",
      "Allow your eyes to close early in the sequence if safe",
      "Commit to at least 15 minutes of quiet time after the practice",
    ],
    donts: [
      "Avoid any active, heating, or physically intense poses",
      "Don't rush the relaxation phase; it is the most vital part",
      "Avoid checking any digital screens or clocks during the flow",
      "Do not eat a sugary or heavy snack immediately after practice",
      "Try not to engage in stimulating conversation during this time",
    ],
  },
  "strength-building": {
    title: "Strength Building Yoga (Shakti Flow)",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1170&auto=format&fit=crop",
    description:
      "Shakti Yoga, or Strength Building Yoga, is a power-based practice that utilizes your own body weight as primary resistance to develop functional strength, muscle tone, and explosive energy. Unlike traditional weightlifting, this practice focuses on eccentric and isometric muscular control, requiring every filament of muscle to work in unified coordination. By incorporating high-planks, deep lunges, and controlled transitions, this sequence builds lean muscle mass while simultaneously improving bone density and metabolic efficiency. It is the perfect practice for those seeking a physically demanding and mentally fortifying workout.",
    benefits: [
      "Significant increase in bone density through weight-bearing loads",
      "Builds lean, functional muscle mass across the entire body",
      "Dramatically improves physical stamina and cardiovascular endurance",
      "Elevates the basal metabolic rate for long-term energy efficiency",
      "Tones the core, glutes, and upper body simultaneously",
      "Increases the resilience of connective tissues and joint stability",
      "Develops unwavering mental discipline and physical grit",
      "Improves overall athletic performance and functional agility",
    ],
    steps: [
      "Hold a strong Warrior II with deep knee bend for 1 minute",
      "Practice controlled Chaturanga Dandasana (Four-Limbed Staff Pose)",
      "Perform a robust Chair pose (Utkatasana) with arms reaching high",
      "Incorporate long, focused holds in all standing and plank postures",
      "Maintain the engagement of all major muscle groups throughout",
      "Focus on the 'pushing' and 'pulling' sensations in every transition",
      "End with a short sequence of core-focused balance postures",
    ],
    dos: [
      "Focus intensely on proper skeletal alignment to avoid joint strain",
      "Engage every muscle group, even in the seemingly 'passive' limbs",
      "Breathe through the muscular burn with steady, deep Ujjayi flow",
      "Keep your core muscles 'zippered' up and active at all times",
      "Distribute the load evenly across all corners of your grounded feet",
    ],
    donts: [
      "Do not sacrifice your safe form for the sake of speed or more reps",
      "Avoid overtraining; listen to the difference between effort and pain",
      "Do not hold your breath during the intense muscular contractions",
      "Avoid locking your joints (keep a micro-bend to engage muscles)",
      "Do not rush the eccentric (lowering) phase of any movement",
    ],
  },
  "back-pain": {
    title: "Back Pain Relief Yoga (Niramaya Sequence)",
    image:
      "https://plus.unsplash.com/premium_photo-1726812095690-996fdfec071f?q=80&w=1170&auto=format&fit=crop",
    description:
      "Niramaya Yoga, or Back Pain Relief Yoga, is a therapeutic series of movements meticulously designed to decompress the spinal column and strengthen the deep stabilizer muscles that support your back. Whether caused by sedentary work, postural habits, or physical stress, back pain is often the result of compressed vertebrae and weakened core support. This sequence utilizes gentle traction, extension, and strategic core activation to relieve Pressure, improve circulation to the spinal discs, and foster long-term structural health. It is an essential practice for reclaiming a pain-free, mobile life.",
    benefits: [
      "Significantly reduces spinal pressure and decompress vertebrae",
      "Strengthens the deep lower back muscles and multifidus",
      "Increases the functional lumbar space for better nerve health",
      "Relieves acute and chronic muscle spasms in the posterior chain",
      "Improves overall posture and corrected spinal alignment",
      "Boosts blood flow and oxygenation to the spinal discs",
      "Calms the nervous system by clearing the physical spinal channel",
      "Increases the range of motion in the hips and thoracic spine",
    ],
    steps: [
      "Perform a very gentle and mindful Cat-Cow flow with breath",
      "Hold Sphinx pose for gentle spinal extension and chest opening",
      "Lower into a supported Child's pose for total decompression",
      "Practice supine spinal twists to release the lateral back muscles",
      "Incorporate gentle core activations to support the lumbar curve",
      "Breathe deeply into the areas of greatest tension along the spine",
      "Maintain a slow, steady pace through all transitions",
    ],
    dos: [
      "Move very slowly and with absolute mindfulness of every sensation",
      "Listen intently to your pain signals; less is often more here",
      "Keep your abdominal muscles subtly active to support your back",
      "Breathe into the 'back' of your lungs to expand the ribcage",
      "Maintain a soft, neutral neck throughout every movement",
    ],
    donts: [
      "Do not push into any sharp, shooting, or electric-like pain",
      "Avoid deep forward folds if your spinal discs are currently sensitive",
      "Do not hold your breath; steady breathing helps release muscles",
      "Avoid sudden or jerky movements that might startle the nerves",
      "Do not over-stretch; focus on stability and gentle mobilization",
    ],
  },
  "immunity-boost": {
    title: "Immunity Boost Yoga (Rakshana Flow)",
    image:
      "https://plus.unsplash.com/premium_photo-1661724211404-c49a5cfa6a80?q=80&w=1171&auto=format&fit=crop",
    description:
      "Rakshana Yoga, or Immunity Boost Yoga, focuses on stimulating the body's natural defense systems through lymphatic drainage, improved circulation, and stress reduction. In yoga, the immune system is closely linked to 'Ojas' (vital essence) and the proper flow of 'Prana' (life force). This sequence incorporates gentle inversions to assist the lymphatic system, chest-openers to support respiratory health, and mindful meditation to lower the inflammatory markers caused by chronic stress. It is a powerful preventative practice for maintaining high energy and robust health.",
    benefits: [
      "Stimulates healthy lymph flow and efficient detoxification",
      "Significantly improves blood oxygenation and cardiovascular health",
      "Reduces chronic inflammatory markers by lowering stress",
      "Lifts overall vital energy and reduces feelings of lethargy",
      "Supports respiratory health by clearing the lung pathways",
      "Massages the internal organs to support endocrine health",
      "Improves the quality of the white blood cell response",
      "Encourages a state of deep internal rest and regeneration",
    ],
    steps: [
      "Invert the body gently with Legs-Up-The-Wall or Half-Plough",
      "Clear the lungs with deep, focused Pranayama (breath work)",
      "Practice heart-opening poses to support the thymus gland",
      "Engage in a 5-minute mindful meditation for stress reduction",
      "Focus on slow, rhythmic movements to assist lymphatic flow",
      "Include gentle twists to squeeze and soak the internal organs",
      "End with a long Savasana to integrate the healing benefits",
    ],
    dos: [
      "Maintain a consistent, daily practice for best immune results",
      "Stay properly hydrated with warm water before and after practice",
      "Focus on deep, diaphragmatic breathing to massage the organs",
      "Ensure your practice space is warm and drafts are eliminated",
      "Listen to your body's energy levels; keep the practice restorative",
    ],
    donts: [
      "Do not practice intense yoga if you currently have a high fever",
      "Avoid over-exhaustion; the goal is to build energy, not deplete it",
      "Avoid rapid or shallow breathing; keep the cycle long and deep",
      "Do not push into any pose that feels physically draining",
      "Avoid eating a heavy or cold meal immediately after the practice",
    ],
  },
  "digestive-health": {
    title: "Digestive Health Yoga (Agni Sar Sequence)",
    image:
      "https://plus.unsplash.com/premium_photo-1666283137563-f420ff4b3af3?q=80&w=1171&auto=format&fit=crop",
    description:
      "Agni Sar Yoga, or Digestive Health Yoga, is a specialized series of twists and abdominal stretches that serve as an internal massage for the digestive organs. In yoga philosophy, the 'fire in the belly' (Jatharagni) is responsible for transforming both food and life experiences into energy. This sequence works by applying gentle compression and release to the stomach, intestines, liver, and kidneys, which improves peristalsis, relieves bloating, and supports the body's natural detoxification pathways. It is an ideal practice for improving metabolic efficiency and feeling lighter within.",
    benefits: [
      "Provides a deep, healing massage to the abdominal organs",
      "Relieves chronic bloating, gas, and feelings of heaviness",
      "Significantly improves intestinal peristalsis and regularity",
      "Aids the body's natural internal detoxification processes",
      "Balances the metabolic rate and improves nutrient absorption",
      "Relieves tension in the lower back caused by digestive stress",
      "Stimulates the solar plexus chakra for increased confidence",
      "Helps regulate the endocrine system in the abdominal area",
    ],
    steps: [
      "Begin with a Seated Spinal Twist, holding for 1 minute per side",
      "Perform Wind-Relieving (Pawanmuktasana) pose with deep breath",
      "Hold a stable Downward Dog to lengthen the abdominal wall",
      "Practice Cobra pose to stretch the front of the abdomen",
      "Incorporate deep, belly-focused Pranayama (Kapalabhati)",
      "Move through a slow Cat-Cow flow focusing on the belly core",
      "End with a gentle seated forward fold to calm the fire",
    ],
    dos: [
      "Always practice on an empty stomach (wait 2-3 hours after meals)",
      "Focus intensely on the 'belly breath' to massage the organs",
      "Move mindfully through twists, leading from the base of the spine",
      "Drink a glass of warm lemon water after the practice to assist detox",
      "Keep your shoulders relaxed even during intense abdominal work",
    ],
    donts: [
      "Avoid deep, intense twists immediately after eating a full meal",
      "Do not strain or force the abdominal muscles during the holds",
      "Avoid holding your breath; the breath is the tool for the massage",
      "Do not practice deep twists if you have recent abdominal surgery",
      "Avoid rushing; the internal organs respond best to slow, steady pressure",
    ],
  },
  "downward-dog-gen": {
    title: "Downward-Facing Dog (Adho Mukha Svanasana)",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1170&auto=format&fit=crop",
    description:
      "Adho Mukha Svanasana, commonly known as Downward-Facing Dog, is perhaps the most iconic and frequently practiced pose in modern yoga. This comprehensive posture creates an inverted 'V' shape, serving as a powerful stretch for the hamstrings and calves while building immense strength in the upper body and core. By encouraging blood flow to the brain and lengthening the entire spinal column, it helps to energize the system and quiet the mind. It is a fundamental practice for building full-body integration and flexibility.",
    benefits: [
      "Deeply stretches the shoulders, hamstrings, and calves",
      "Strengthens the hands, wrists, arms, and upper body girdle",
      "Energizes the entire physical system and relieves fatigue",
      "Relieves chronic back pain by lengthening the spine",
      "Improves blood flow to the brain for better mental clarity",
      "Calms the nervous system and helps reduce mild anxiety",
      "Tones the core muscles and helps stabilize the pelvis",
      "Improves the function of the digestive and metabolic systems",
    ],
    steps: [
      "Start on all fours with hands slightly ahead of your shoulders",
      "Exhale and lift your knees off the floor, reaching hips high",
      "Press your heels toward the mat (it's okay if they don't touch)",
      "Lengthen through the spine, reaching sit-bones toward the sky",
      "Keep your fingers spread wide and press through your palms",
      "Pedal your feet slowly to warm up the back of your legs",
      "Maintain a long neck and let your head speak to your heart",
    ],
    dos: [
      "Spread your fingers wide like a starfish for a solid foundation",
      "Engage your deep core to lift your weight out of your wrists",
      "Maintain a soft micro-bend in your knees for joint safety",
      "Draw your shoulder blades down your back, away from ears",
      "Distribute your weight evenly between your hands and feet",
    ],
    donts: [
      "Do not round your lower or upper back; focus on length",
      "Avoid shrugging your shoulders toward your ears (protect neck)",
      "Do not lock your elbows; keep them strong but active",
      "Avoid holding your breath; find a steady Ujjayi rhythm",
      "Do not force your heels down if it causes your back to round",
    ],
  },
  "child-pose": {
    title: "Child's Pose (Restorative - Balasana)",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1170&auto=format&fit=crop",
    description:
      "Balasana, or Child's Pose, is the ultimate sanctuary in a yoga practice. This restorative posture offers a deep sense of security and internal focus, acting as a mental and physical 'reset' button. By folding the torso over the thighs and resting the forehead on the earth, the practitioner gently stretches the hips, thighs, and ankles while allowing the nervous system to settle. It is a vital pose for releasing tension in the lower back and neck, providing a space for quiet surrender and present-moment awareness.",
    benefits: [
      "Provides deep mental tranquility and releases acute stress",
      "Calms the central nervous system and the mind instantly",
      "Gently stretches the hips, thighs, and the ankle joints",
      "Eases chronic tension in the lower back and spinal column",
      "Improves internal digestion through gentle abdominal focus",
      "Reduces fatigue and helps alleviate symptoms of headaches",
      "Promotes a state of mindfulness and internal introspection",
      "Cools the body after intense sequences or physical effort",
    ],
    steps: [
      "Kneel on the floor and bring your big toes together to touch",
      "Sit back on your heels and separate your knees hip-width",
      "Exhale and fold your torso forward between your resting thighs",
      "Rest your forehead gently on the mat or a supportive block",
      "Extend your arms forward or rest them back alongside your hips",
      "Breathe deeply into the back of your ribs and lower back",
      "Hold for 1-5 minutes, allowing your body to melt into the earth",
    ],
    dos: [
      "Breathe deeply and rhythmically into your back-body area",
      "Allow your belly and shoulders to relax completely in the pose",
      "Focus on the sensation of your tailbone reaching toward heels",
      "Use a pillow or blanket between thighs and calves if needed",
      "Close your eyes to turn your attention deeper inward",
    ],
    donts: [
      "Do not force your hips down if your knees feel uncomfortable",
      "Avoid staying in the pose if you experience sharp knee pain",
      "Do not hold tension in your face or jaw; let them be soft",
      "Avoid 'scrunching' your neck; keep your forehead grounded",
      "Don't worry about how deep you go; focus on the state of rest",
    ],
  },
  "warrior-pose": {
    title: "Warrior II Pose (Virabhadrasana II)",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
    description:
      "Virabhadrasana II, or Warrior II, is a powerful standing posture that embodies the strength, focus, and determination of a legendary warrior. This pose is not just about physical stamina; it is a mental exercise in single-pointed concentration and emotional stability. By grounding deeply through the legs and expanding through the arms, the practitioner creates a sense of profound presence and inner power. It is an essential practice for building lower body strength, opening the hips, and fostering a calm, focused mind amidst physical effort.",
    benefits: [
      "Builds exceptional physical stamina and mental single-pointedness",
      "Strengthens and tones the entire lower body, especially the thighs",
      "Deeply opens the hips and stretches the internal groin area",
      "Improves respiratory capacity by expanding the chest and lungs",
      "Develops core stability and overall functional physical balance",
      "Stimulates the abdominal organs for better internal digestion",
      "Relieves backaches and therapeutic for carpal tunnel syndrome",
      "Encourages a state of unwavering confidence and internal grit",
    ],
    steps: [
      "Step your feet wide apart, about 3.5 to 4 feet on your mat",
      "Turn your right foot out 90 degrees and left foot in slightly",
      "Bend your right knee deeply until it is directly over the ankle",
      "Extend your arms wide at shoulder height, reaching through fingers",
      "Gaze steadily over the middle finger of your front right hand",
      "Keep your torso upright and shoulders relaxed away from ears",
      "Press firmly through the outer edge of your back left foot",
    ],
    dos: [
      "Keep your deep core engaged to protect and support the spine",
      "Align your front knee precisely over your front ankle center",
      "Maintain a long, even breath even as the legs begin to fatigue",
      "Reach through both sets of fingertips to broaden the collarbones",
      "Visualize your strength radiating from your center to your edges",
    ],
    donts: [
      "Do not allow your front knee to collapse inward (keep it active)",
      "Avoid over-arching your lower back; keep your tailbone neutral",
      "Do not lean your torso forward; keep it vertical and centered",
      "Avoid tensing your jaw or forehead; stay calm in the effort",
      "Do not hold your breath; stay with the rhythmic Ujjayi flow",
    ],
  },
  "tree-pose": {
    title: "Tree Pose (Vrksasana)",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1099&auto=format&fit=crop",
    description:
      "Vrksasana, or Tree Pose, is a foundational balancing posture that teaches the art of steadiness, grace, and internal focus. Like a tree rooting into the earth while reaching for the sky, this pose requires a delicate balance between grounding and lifting. It is a powerful practice for calming the 'monkey mind' and overcoming the daily fluctuations of attention. By focusing on a single, unmoving point (Drishti), the practitioner learns to find silence and stability within, even when the external world is moving.",
    benefits: [
      "Significantly improves physical balance and structural stability",
      "Strengthens the ankles, calves, and inner thigh muscles",
      "Fosters deep mental concentration and single-pointed focus",
      "Opens the hips and stretches the internal groin area",
      "Relieves symptoms of sciatica and helps reduce flat feet",
      "Tones the core muscles and stabilizes the pelvic floor",
      "Encourages a state of calm, meditative presence in action",
      "Develops patience and resilience through the practice of balance",
    ],
    steps: [
      "Stand tall in Tadasana and shift your weight into the left leg",
      "Place your right foot against the inner left thigh or calf",
      "Press the foot and thigh firmly against each other for stability",
      "Bring your hands to heart center or reach them high above head",
      "Focus your gaze on a fixed, non-moving point directly ahead",
      "Lengthen your spine and reach your crown toward the ceiling",
      "Hold for 30-60 seconds while maintaining steady, deep breath",
    ],
    dos: [
      "Engage your standing leg firmly by drawing the kneecap up",
      "Keep your spine tall and your shoulders relaxed and broad",
      "Use a wall for support if you are still developing your balance",
      "Keep your standing foot toes spread wide for a solid base",
      "Imagine roots growing from your standing foot into the earth",
    ],
    donts: [
      "Avoid placing your foot directly on the knee joint (protect the joint)",
      "Do not hold your breath; steady breathing is vital for balance",
      "Avoid tensing your jaw or forehead while trying to balance",
      "Do not 'sink' into your standing hip; keep pulling up away from mat",
      "Avoid judging yourself if you wobble or fall; simply reset and try",
    ],
  },
  "bridge-pose-gen": {
    title: "Bridge Pose (Setu Bandhasana)",
    image:
      "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=1220&auto=format&fit=crop",
    description:
      "Setu Bandhasana, or Bridge Pose, is a versatile backbend that offers a profound opening for the heart, lungs, and thyroid. This pose acts as a bridge between active effort and restorative calm, helping to energize the system while simultaneously soothing the nervous system. By lifting the hips and expanding the chest, the practitioner can relieve tension in the neck and shoulders, improve spinal flexibility, and alleviate symptoms of stress and anxiety. It is an essential practice for balancing the endocrine system and fostering internal vitality.",
    benefits: [
      "Deeply stretches and opens the chest, lungs, and shoulders",
      "Strengthens the entire back body, including glutes and hamstrings",
      "Improves internal digestion and massages the abdominal organs",
      "Reduces chronic anxiety, fatigue, backaches, and headaches",
      "Calms the brain and helps alleviate mild depression symptoms",
      "Stimulates the thyroid, lungs, and abdominal endocrine glands",
      "Relieves the symptoms of menopause and menstrual discomfort",
      "Therapeutic for high blood pressure, asthma, and sinusitis",
    ],
    steps: [
      "Lie on your back with knees bent and feet flat on the floor",
      "Place your feet hip-width apart, directly under your knees",
      "Press through your feet and exhale as you lift your hips up",
      "Interlace your hands under your back and roll your shoulders in",
      "Reach your heart toward your chin but keep the chin away from chest",
      "Keep your thighs and inner feet active and parallel to each other",
      "Hold for 30-60 seconds, then lower down slowly on an exhale",
    ],
    dos: [
      "Keep your knees aligned directly over your ankles at all times",
      "Breathe deeply into your upper chest and the front of your heart",
      "Press the back of your head gently into the mat to support neck",
      "Keep your glutes active but try not to over-squeeze them",
      "Use a block under your sacrum for a more restorative version",
    ],
    donts: [
      "Do not allow your knees to splay out to the sides (keep them parallel)",
      "Avoid moving your head from side to side while in the lift",
      "Do not over-arch your lower back; focus on lengthening the tailbone",
      "Avoid holding your breath; keep the air flowing steadily and deep",
      "Do not stay in the pose if you experience sharp pain in the knees",
    ],
  },
  "plank-gen": {
    title: "Plank Pose (Phalakasana)",
    image:
      "https://images.unsplash.com/photo-1579455150073-3a7974b46aa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmVjayUyMGFuZCUyMHNob3VsZGVyJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Phalakasana, or Plank Pose, is a quintessential core-stabilizing posture that builds full-body strength and mental grit. This 'powerhouse' pose requires the integration of almost every major muscle group—arms, shoulders, core, glutes, and legs—all working in harmony to maintain a rigid, linear form. Regular practice develops not only physical durability but also 'Tapas' (internal fire) and the mental focus required to remain steady in the face of intensity. It is the literal foundation for many advanced balances and inversions.",
    benefits: [
      "Develops exceptional deep core strength and abdominal tone",
      "Strengthens the arms, wrists, and the entire shoulder girdle",
      "Improves functional posture by stabilizing the spinal column",
      "Builds significant mental stamina and single-pointed focus",
      "Tones the glutes, hamstrings, and quadriceps muscles",
      "Enhances full-body coordination and muscular integration",
      "Increases cardiovascular health when held for longer durations",
      "Promotes better wrist health when alignment is correct",
    ],
    steps: [
      "Start in a high push-up position with hands directly under shoulders",
      "Spread your fingers wide and press firmly through the whole palm",
      "Keep your heels reaching back and your legs fully engaged",
      "Maintain your body in one perfectly straight line from head to heels",
      "Engage your core and tuck your tailbone slightly to protect back",
      "Gaze slightly forward of your hands to keep the neck neutral",
      "Push the floor away to broaden through your shoulder blades",
    ],
    dos: [
      "Press the floor away firmly with your palms and fingertips",
      "Hold the pose for 30-60 seconds while breathing steadily",
      "Imagine your body is as rigid and strong as a wooden plank",
      "Breathe into the back of your ribcage to maintain energy",
      "Keep your inner thighs active and subtly drawing toward center",
    ],
    donts: [
      "Do not 'dip' your hips toward the floor (protect the lower back)",
      "Avoid 'hiking' your hips high like a mountain; keep them level",
      "Do not lock your elbows; keep a micro-bend for joint safety",
      "Avoid shrugging your shoulders toward your ears; keep them back",
      "Do not hold your breath; stay with the rhythmic Ujjayi flow",
    ],
  },
  "cobra-pose": {
    title: "Cobra Pose (Bhujangasana)",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
    description:
      "Bhujangasana, or Cobra Pose, is a fundamental backbend that offers a profound opening for the heart and lungs while increasing the flexibility and strength of the spinal column. This pose mimics the arched posture of a cobra, providing a deep stretch for the entire front body while strengthening the posterior chain. It is an essential practice for countering the effects of prolonged sitting, improving respiratory capacity, and invigorating the nervous system with fresh energy and internal heat.",
    benefits: [
      "Opens the heart-center and significantly expands the ribcage",
      "Strengthens the entire spinal column and back musculature",
      "Stimulates the abdominal organs and improves daily digestion",
      "Elevates the mood and helps alleviate mild fatigue and stress",
      "Corrects posture and helps realign the cervical and lumbar spine",
      "Increases the depth and quality of the breathing pattern",
      "Tones the glutes and helps stabilize the pelvic structure",
      "Supports the health of the kidneys and adrenal glands",
    ],
    steps: [
      "Lie on your belly with legs extended and tops of feet on the mat",
      "Place your hands directly under your shoulders, elbows tucked in",
      "Inhale and gently lift your chest off the floor using back strength",
      "Draw your shoulders back and down, away from the neck area",
      "Maintain a soft gaze forward or slightly upward without strain",
      "Press the tops of your feet and thighs firmly into the earth",
      "Hold for 15-30 seconds while maintaining a steady, even breath",
    ],
    dos: [
      "Roll your shoulders back and down to keep the neck long",
      "Press the tops of your feet firmly into the mat for stability",
      "Engage your deep core muscles to protect the lower spine",
      "Keep your elbows hugging close to your ribcage at all times",
      "Focus on the 'peeling' sensation of the chest off the floor",
    ],
    donts: [
      "Do not lock your elbows or use excessive arm force to lift",
      "Avoid 'crunching' the back of your neck by looking too high",
      "Do not lift your hips off the floor in the low Cobra version",
      "Avoid holding your breath; stay with the rhythmic Ujjayi flow",
      "Do not push into any sharp or shooting pain in the lower back",
    ],
  },
  "seated-forward-bend-gen": {
    title: "Seated Forward Fold (Paschimottanasana)",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1170&auto=format&fit=crop",
    description:
      "Paschimottanasana is a powerful seated forward fold that offers a deep, satisfying stretch for the entire back body—from the heels to the crown of the head. This pose is often referred to as the 'Gateway to Stillness' because of its profound calming effect on the nervous system. By folding inward, the practitioner can quiet mental noise, improve digestion, and release the deep-seated tension often stored in the hamstrings and lower back. It is a fundamental practice for building flexibility, patience, and inward focus.",
    benefits: [
      "Significantly increases flexibility in the hamstrings, calves, and back",
      "Deeply calms the brain and relieves mild depression and anxiety",
      "Stimulates the liver, kidneys, and pancreas for better detoxification",
      "Improves digestion and relieves symptoms of bloating and acidity",
      "Reduces fatigue and helps soothe tension headaches and stress",
      "Lengthens the entire spinal column and stretches back musculature",
      "Reduces obesity and tones the abdominal fat through compression",
      "Promotes a deep sense of internal surrender and tranquility",
    ],
    steps: [
      "Sit with your legs extended straight in front (Dandasana posture)",
      "Inhale deeply and reach your arms high to lengthen the spine",
      "Exhale and hinge forward from the hips, leading with your heart center",
      "Reach for your shins, ankles, or the outer edges of your active feet",
      "Keep your neck in line with your spine; avoid dropping the head",
      "Hold for 1-3 minutes, deepening the fold slightly with each exhale",
      "Breathe focus into the back of your lungs and lower spine",
    ],
    dos: [
      "Lead the folding movement with your chest rather than your head",
      "Keep your feet active with toes pointing upward toward your face",
      "Micro-bend your knees if your hamstrings feel excessively tight",
      "Maintain a long, flat back for as long as possible in the fold",
      "Focus on slow, rhythmic breathing to relax the deep tissues",
    ],
    donts: [
      "Do not 'pull' yourself down with arm force; use the breath to descend",
      "Avoid rounding your lower back excessively into a 'C' shape",
      "Do not force your head to touch your knees; keep length in neck",
      "Avoid locking your knees if you have hyper-mobility in joints",
      "Do not hold your breath during the intense moments of the stretch",
    ],
  },
  "corpse-pose": {
    title: "Corpse Pose (Savasana)",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
    description:
      "Savasana, or Corpse Pose, is the most essential part of a yoga practice. While it may appear simple, it is often considered the most difficult pose to master, requiring the total surrender of physical effort and mental chatter. This vital final relaxation posture allows the nervous system to settle and the body to assimilate the physiological and energetic benefits of the preceding practice. By lying in complete stillness, the practitioner enters a state of 'conscious rest,' fostering profound mental clarity, deep internal peace, and cellular regeneration.",
    benefits: [
      "Promotes deep physical relaxation and cellular restoration",
      "Significantly reduces blood pressure and heart rate",
      "Relieves chronic tension headaches, fatigue, and insomnia",
      "Fosters a state of profound inward focus and mental clarity",
      "Calms the brain and helps alleviate mild depression symptoms",
      "Reduces psychological stress and lowers cortisol levels",
      "Improves memory, focus, and overall cognitive function",
      "Integrates the energetic shifts created during the practice",
    ],
    steps: [
      "Lie perfectly flat on your back with legs comfortably separated",
      "Let your feet fall open naturally to the sides without effort",
      "Place your arms beside your body, palms facing up to receive",
      "Close your eyes gently and let your eyeballs settle in the sockets",
      "Systematically release every muscle group from toes to crown",
      "Breathe naturally and without any conscious control or effort",
      "Remain in total stillness for 5-15 minutes, allowing thoughts to pass",
    ],
    dos: [
      "Let go of all physical tension and any conscious breath control",
      "Allow your body to feel heavy and completely supported by earth",
      "Maintain a soft, internal awareness without attaching to thoughts",
      "Use a blanket or eye-mask for additional comfort and focus",
      "Roll to one side and pause before slowly rising from the pose",
    ],
    donts: [
      "Do not fall into a heavy sleep; maintain a spark of awareness",
      "Try not to move even the smallest muscle once you are settled",
      "Do not judge the thoughts that arise; simply let them float by",
      "Avoid rushing out of the pose; transition slowly back to sitting",
      "Try not to engage in stimulating external thoughts or planning",
    ],
  },
  "hips-pelvis": {
    title: "Hips & Pelvis Health (Moola Flow)",
    image:
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1171&auto=format&fit=crop",
    description:
      "Moola Flow, or Hips & Pelvis Health, is a deep opening sequence designed to release physical and emotional tension stored within the pelvic region. In many traditions, the hips are considered the 'junk drawer' of the body, where we store unprocessed stress and unresolved emotions. By utilizing long, gravity-assisted holds in poses like Pigeon and Happy Baby, this practice encourages the deep release of the iliopsoas and external rotators. Improved hip mobility not only enhances full-body movement but also significantly reduces strain on the lower back and knees.",
    benefits: [
      "Dramatically increases functional mobility in the hip joints",
      "Relieves chronic lower back pressure and lumbar discomfort",
      "Improves blood circulation and vitality to the pelvic organs",
      "Facilitates the healthy release of stored emotional stress",
      "Supports the health and stability of the pelvic floor muscles",
      "Increases the range of motion for walking, running, and sitting",
      "Stretches the deep gluteal muscles and the piriformis",
      "Promotes a profound sense of grounding and internal security",
    ],
    steps: [
      "Practice Pigeon pose (Eka Pada Rajakapotasana) with level hips",
      "Lower into Happy Baby pose, gently rocking from side to side",
      "Breathe deeply and mindfully into the front hip creases",
      "Perform a seated Bound Angle (Baddha Konasana) with long spine",
      "Focus on relaxing the deep pelvic floor with every exhalation",
      "Maintain level and square hips throughout all asymmetrical poses",
      "Hold restorative hip openers for 2-5 minutes for deep tissue release",
    ],
    dos: [
      "Use yoga blocks or blankets to support your hips in Pigeon pose",
      "Keep your front foot flexed in Pigeon to protect the knee joint",
      "Maintain a long, neutral spine even during deep hip stretches",
      "Focus on the sensation of surrendering to gravity in the holds",
      "Listen to your body's subtle signals and back off if pain arises",
    ],
    donts: [
      "Do not force your knees toward the floor if they feel strained",
      "Avoid uneven weight distribution in the pelvis (keep it centered)",
      "Do not hold your breath; steady breathing is vital for tissue release",
      "Avoid 'bouncing' in the stretches; stay with slow, steady pressure",
      "Do not ignore sharp or electric-like sensations in the hip joints",
    ],
  },
  "legs-knees": {
    title: "Legs & Knees Stability (Sthira Sequence)",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1170&auto=format&fit=crop",
    description:
      "Sthira Yoga, or Legs & Knees Stability, is a strength-focused sequence designed to build a resilient foundation from the ground up. The health of the knee joint is almost entirely dependent on the strength and balance of the surrounding muscles—the quadriceps, hamstrings, and calves. By incorporating powerful standing postures and isometric holds, this practice stabilizes the knee cap, strengthens the supporting ligaments, and improves overall lower-body integration. It is an essential practice for athletes, hikers, and anyone looking to maintain lifelong mobility.",
    benefits: [
      "Significantly strengthens the quadriceps and hamstring groups",
      "Protects the knee joint by stabilizing the surrounding ligaments",
      "Improves functional balance and full-body structural stability",
      "Strengthens the ankles and the arches of the feet",
      "Stabilizes the lower body for more efficient daily movement",
      "Increases bone density in the femurs, tibias, and patellas",
      "Improves blood circulation to the lower extremities",
      "Reduces the risk of common knee injuries and wear-and-tear",
    ],
    steps: [
      "Hold Chair pose (Utkatasana) for 45-60 seconds with active core",
      "Practice Warrior I & II to build stamina and muscular endurance",
      "Engage the leg muscles fully by drawing the kneecaps upward",
      "Incorporate standing balance poses to challenge joint stability",
      "Maintain precise knee alignment over the second and third toes",
      "Focus on distributing weight evenly across the whole foot",
      "Perform slow, controlled transitions between all standing poses",
    ],
    dos: [
      "Keep your knees directly over your ankles or slightly behind them",
      "Maintain a subtle micro-bend in the knees to avoid locking joints",
      "Press the outer edges of your feet firmly into the mat for a base",
      "Focus on the 'lift' from the arches of your feet through the core",
      "Keep your spine tall and vertical during all standing work",
    ],
    donts: [
      "Do not allow your knees to collapse inward toward each other",
      "Avoid sharp or grinding pain; stay within a comfortable range",
      "Do not allow your weight to shift entirely into the toes or heels",
      "Avoid 'hanging' in your joints; keep the muscles actively engaged",
      "Do not hold your breath; steady inhalations fuel muscular work",
    ],
  },
  "arms-wrists": {
    title: "Arms & Wrists Strength (Bahus Power)",
    image:
      "https://plus.unsplash.com/premium_photo-1661601741915-2a6b6e1596dd?q=80&w=1170&auto=format&fit=crop",
    description:
      "Bahus Power, or Arms & Wrists Strength, is a vital practice for developing the upper body durability required for safe weight-bearing yoga. Modern life often leaves our wrists weak and our shoulders tight; this sequence systematically builds the necessary strength in the forearms, triceps, and deltoids while fostering wrist flexibility. By learning how to 'claw' the mat and distribute weight properly through the hands, the practitioner protects the delicate carpal tunnel and prepares the body for more advanced balances and inversions.",
    benefits: [
      "Prevents and relieves carpal tunnel syndrome and wrist tension",
      "Increases functional grip strength and forearm muscular tone",
      "Provides a solid foundation for arm balances and inversions",
      "Significantly improves wrist flexibility and joint resilience",
      "Strengthens the triceps, biceps, and the entire shoulder girdle",
      "Promotes better blood flow and circulation to the fingertips",
      "Balances the upper body strength with the lower body power",
      "Teaches the vital skill of 'Hasta Bandha' (the hand lock)",
    ],
    steps: [
      "Practice slow and controlled Plank to Chaturanga transitions",
      "Perform gentle wrist circles and stretches in both directions",
      "Learn to 'claw' the mat with fingertips to engage the forearms",
      "Roll your wrists regularly between intense weight-bearing sets",
      "Practice 'Hasta Bandha' by pressing the finger mounds into earth",
      "Incorporate Forearm Plank to build shoulder stability and grit",
      "Hold Downward Dog while focusing on the weight in the palms",
    ],
    dos: [
      "Distribute your weight evenly through the entire palm and fingers",
      "Always warm up your wrists and shoulders before any practice",
      "Keep your shoulders drawing away from ears while weight-bearing",
      "Maintain a strong, active core to lift weight out of the wrists",
      "Listen to the first signs of joint fatigue and take a rest",
    ],
    donts: [
      "Do not 'dump' all your weight into the heels of your palms",
      "Avoid overextending or locking your elbows (keep a micro-bend)",
      "Do not practice intense arm work if you have an acute wrist injury",
      "Avoid collapse in the shoulder blades; keep the chest broad",
      "Do not ignore sharp or electric sensations in the hand or wrist",
    ],
  },
  "core-abdomen": {
    title: "Core & Abdomen Power (Agni Kendra)",
    image:
      "https://images.unsplash.com/photo-1579455150073-3a7974b46aa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmVjayUyMGFuZCUyMHNob3VsZGVyJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Agni Kendra, or Core & Abdomen Power, focuses on firing up the 'sun center' of the body—the abdominal wall and deep core musculature. This practice utilizes advanced engagement techniques to build a functional 'corset' of strength that stabilizes the spine and powers all external movement. By incorporating both static holds and dynamic transitions, we stimulate the digestive system and build immense internal heat (Tapas). A strong core is the physical and energetic center of a healthy, balanced life.",
    benefits: [
      "Produces a significantly flattened and toned abdominal region",
      "Provides superior physical balance and structural stability",
      "Deeply protects the lumbar spine from daily strain and injury",
      "Increases the 'digestive fire' (Jatharagni) and metabolic rate",
      "Encourages a state of internal power and emotional confidence",
      "Improves the efficiency of almost every other physical movement",
      "Tones the internal organs through deep compression and focus",
      "Lifts the internal energy of the solar plexus chakra center",
    ],
    steps: [
      "Practice several rounds of Boat pose (Navasana) with long spine",
      "Hold a rock-steady Forearm Plank for 45-60 seconds",
      "Incorporate slow, controlled supine leg lifts and core work",
      "Focus intensely on exhaling during the moments of peak exertion",
      "Practice lifting the pelvic floor (Mula Bandha) during all holds",
      "Maintain the engagement of the transverse abdominals throughout",
      "End with a gentle abdominal release like a soft Sphinx pose",
    ],
    dos: [
      "Keep your spine as long and vertical as possible in seated work",
      "Engage your deep pelvic floor to provide foundational support",
      "Breathe into the back of your lungs while the core is active",
      "Maintain a soft, neutral neck to avoid unnecessary tension",
      "Listen to the quality of your breath; keep it steady and even",
    ],
    donts: [
      "Do not hold your breath; oxygen is vital for muscular energy",
      "Avoid arching or 'dipping' your lower back in Plank poses",
      "Do not 'dome' the belly; keep it drawing inward and flat",
      "Avoid pulling on your head or neck during supine exercises",
      "Do not sacrifice your form for the sake of extra duration",
    ],
  },
  "chest-lungs": {
    title: "Chest & Lungs Opening (Prana Expander)",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1099&auto=format&fit=crop",
    description:
      "Prana Expander, or Chest & Lungs Opening, is a respiratory-focused sequence designed to overcome the physical effects of modern sedentary lifestyle. Slouching over screens often leads to a collapsed chest and shallow breathing; this practice counters that by physically expanding the rib cage and improving total lung capacity. Through heart-opening backbends and targeted breath work, the practitioner increases their vitality, reduces upper body tension, and fosters a sense of joyous openness toward the world.",
    benefits: [
      "Dramatically increases the volume of oxygen intake per breath",
      "Opens the heart-center (Anahata) for emotional health",
      "Significantly improves overall breathing depth and quality",
      "Reduces chronic chest tightness and upper back discomfort",
      "Boosts energy levels by improving blood oxygenation",
      "Corrects rounded-shoulder posture and spinal alignment",
      "Promotes a state of mental clarity and emotional resilience",
      "Supports the healthy function of the circulatory system",
    ],
    steps: [
      "Perform Fish pose (Matsyasana) with a supported heart center",
      "Practice deep, rhythmic Pranayama (Ujjayi or Nadi Shodhana)",
      "Hold a gentle Camel pose, reaching the heart toward the sky",
      "Focus intensely on expanding the side-ribs during every inhale",
      "Practice gentle spinal twists to release the intercostal muscles",
      "Incorporate restorative heart-openers with blocks or bolsters",
      "End with a 5-minute heart-focused meditation for peace",
    ],
    dos: [
      "Lift from the very center of your heart during the backbends",
      "Keep your neck supported and the back of the skull long",
      "Take slow, expansive breaths that fill the whole ribcage",
      "Broaden your collarbones and draw the shoulder blades down",
      "Practice with a sense of internal joy and expansive lightness",
    ],
    donts: [
      "Do not strain the throat or cervical spine in deep backbends",
      "Avoid rapid or shallow breaths; focus on the slow expansion",
      "Do not push into any pinch or pain in the middle or upper back",
      "Avoid holding your breath, especially when the chest is open",
      "Do not force the shoulders open; allow them to melt with time",
    ],
  },
  "full-body": {
    title: "Full Body Harmonization (Sarva Flow)",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1170&auto=format&fit=crop",
    description:
      "Sarva Flow, or Full Body Harmonization, is a comprehensive journey that bridges all major muscle groups and physiological systems into a single, unified experience. This practice is designed to create 'holistic integration'—where the breath, the physical movements, and the mental focus merge into one graceful flow. By incorporating elements of strength, flexibility, balance, and restoration, this sequence ensures that no part of the self is neglected. It is the ultimate practice for total wellness, leaving the practitioner feeling balanced, energized, and profoundly connected.",
    benefits: [
      "Provides complete physical integration and muscular harmony",
      "Creates a unified energy flow (Prana) throughout the whole system",
      "Increases functional flexibility and range of motion everywhere",
      "Strengthens the mind-body connection and proprioceptive sense",
      "Balances the central nervous system and the endocrine system",
      "Promotes a state of total holistic wellbeing and inner peace",
      "Tones the entire body while simultaneously reducing cortisol",
      "Encourages a state of flow that carries over into daily life",
    ],
    steps: [
      "Start with several rounds of Sun Salutation to build heat and rhythm",
      "Incorporate standing poses, balances, and deep floor stretches",
      "Sync every single movement precisely with a deep, rhythmic breath",
      "Focus intensely on the fluid transitions between every posture",
      "Practice 'full-body' awareness, from your toes to your fingertips",
      "Maintain a steady, internal focus throughout the entire flow",
      "End with a minimum of 10 minutes in Savasana for total rest",
    ],
    dos: [
      "Maintain a consistent, unbroken flow of both breath and movement",
      "Send your breath and awareness into every limb and joint",
      "Keep your focus 'panoramic'—be aware of the whole body at once",
      "Listen to your body's changing needs as the sequence progresses",
      "Practice with a sense of internal gratitude and total presence",
    ],
    donts: [
      "Do not neglect any area of the body, even the smallest joints",
      "Avoid rushing the process; the benefit is in the quality of flow",
      "Do not hold your breath; keep the internal 'wind' moving steadily",
      "Avoid getting stuck in your head; return to the physical sensation",
      "Do not push into pain; the goal is harmony, not physical conquest",
    ],
  },
  "head-brain": {
    title: "Head & Brain Clarity (Chitta Shuddhi)",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1099&auto=format&fit=crop",
    description:
      "Chitta Shuddhi, or Head & Brain Clarity, utilizes mindful postures and gentle inversions to increase nutrient-rich blood flow to the brain and quiet the 'monkey mind.' In our hyper-stimulated world, mental fatigue and scattered focus are common; this sequence acts as a neurological reset. By placing the head below the heart and practicing single-pointed concentration (Dharana), we improve memory, sharpen focus, and foster a state of profound mental tranquility. It is the ultimate brain-health sequence for better cognitive function and emotional balance.",
    benefits: [
      "Sharpened mental focus and significantly improved concentration",
      "Dramatically reduces mental fatigue and the symptoms of 'brain fog'",
      "Calms the sympathetic nervous system and induces deep relaxation",
      "Improves cognitive coordination and overall reaction time",
      "Increases oxygenation to the brain cells for better vitality",
      "Balances the left and right hemispheres of the brain",
      "Fosters a state of meditative stillness and internal peace",
      "Reduces chronic anxiety and helps regulate sleep patterns",
    ],
    steps: [
      "Start with a long, slow Child's pose to settle the mind and breath",
      "Hold a wide-legged forward fold (Prasarita) to bring blood to head",
      "Practice alternate nostril breathing (Nadi Shodhana) for 5 minutes",
      "Incorporate gentle inversions (Legs-up-the-wall) for restorative flow",
      "Maintain a steady, soft Gaze (Drishti) on one unmoving point",
      "Practice deep, silent meditation after the physical sequence",
      "Listen to the sound of your own breath as the 'anchor' for focus",
    ],
    dos: [
      "Focus your internal awareness on the 'third eye' (between brows)",
      "Keep your breath exceptionally calm, steady, and silent",
      "Ensure your neck is always neutral and never strained in folds",
      "Close your eyes if it helps you turn your attention deeper inward",
      "Approach the practice with a sense of curiosity and quietude",
    ],
    donts: [
      "Avoid intense inversions if you have high blood pressure or glaucoma",
      "Do not strain your neck or cervical spine in any folded position",
      "Avoid practicing this sequence immediately after a heavy meal",
      "Do not force the meditation; simply allow the silence to arrive",
      "Try not to let your thoughts wander; gently return to the breath",
    ],
  },
  "hands-fingers": {
    title: "Hands & Fingers Dexterity (Hasta Yoga)",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1170&auto=format&fit=crop",
    description:
      "Hasta Yoga, or Hands & Fingers Dexterity, is a unique and often overlooked practice dedicated to the intricate musculoskeletal system of the hands. Our hands are our primary tools of interaction with the world, yet they often suffer from 'digital fatigue' and chronic stiffness due to repetitive typing and screen use. This sequence utilizes Mudras (hand gestures), targeted stretches, and joint rotations to keep the 27 bones of each hand mobile and strong. It is an essential practice for musicians, artists, and anyone seeking to maintain lifelong manual grace.",
    benefits: [
      "Immediately relieves finger stiffness and joint compression",
      "Significantly improves manual dexterity and fine motor skills",
      "Deeply stretches the often-neglected intrinsic hand muscles",
      "Releases 'digital fatigue' and tension from typing or texting",
      "Improves blood circulation and nerve health to the fingertips",
      "Prevents and helps alleviate the symptoms of hand arthritis",
      "Builds strength in the wrists and the small muscles of the palm",
      "Enhances the mind-hand connection through focused Mudra work",
    ],
    steps: [
      "Practice traditional 'Mudras' like Gyan or Anjali for focus",
      "Perform slow, controlled finger extensions and flexions",
      "Incorporate gentle wrist rotations in both large and small circles",
      "Apply gentle pressure between opposite palms to build tone",
      "'Play' an invisible piano in the air to challenge coordination",
      "Stretch the base of the thumbs and the webs between fingers",
      "End with a gentle hand massage using your own thumbs and breath",
    ],
    dos: [
      "Be exceptionally gentle with all small joints of the fingers",
      "Breathe deeply 'into' the palms and fingertips during the holds",
      "Focus on the subtle energetic sensations within the hands",
      "Practice these movements several times a day for best results",
      "Maintain a tall, relaxed posture even when focusing on the hands",
    ],
    donts: [
      "Do not 'pop' or 'crack' your joints forcibly during the practice",
      "Avoid applying excessive or sharp pressure to the finger joints",
      "Do not rush; the small muscles release best with slow attention",
      "Avoid holding tension in your shoulders while working the hands",
      "Do not ignore any persistent numbness or sharp tingling sensations",
    ],
  },
  "warrior-2-3": {
    title: "Warrior II & III (Virabhadrasana II & III)",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1170&auto=format&fit=crop",
    description:
      "The Warrior Series (Virabhadrasana) represents the perfect union of physical strength and mental focus. Warrior II is a grounded, expansive posture that opens the hips and chest while forging powerful legs. Warrior III is its more dynamic counterpart—a challenging balance that requires total body integration and unwavering concentration. Practiced together, they represent the journey from stability to flight, helping the practitioner find their internal center of gravity while expanding their physical and mental horizons. These poses are essential for developing the 'warrior's mindset' of presence and determination.",
    benefits: [
      "Deeply strengthens and stretches the legs, ankles, and feet",
      "Improves full-body balance and proprioceptive awareness",
      "Tones the core and develops back-body muscular strength",
      "Opens the chest, heart, and lungs for better respiratory depth",
      "Enhances mental concentration and single-pointed focus (Dharana)",
      "Stimulates the abdominal organs and improves internal digestion",
      "Reduces chronic backaches and improves overall spinal alignment",
      "Increases physical stamina and the ability to hold challenging states",
    ],
    steps: [
      "Step into Warrior II with feet wide, front knee bent 90 degrees",
      "Extend your arms horizontally, gazing over the front fingertips",
      "Transition your weight forward onto the front leg with control",
      "Slowly lift the back leg as you hinge your torso forward into 'T' shape",
      "Lengthen through the crown of your head and the heel of the lifted leg",
      "Reach your arms forward, wide, or alongside the body for balance",
      "Fix your gaze on a steady point on the floor for stability",
    ],
    dos: [
      "Keep your front knee aligned directly over your ankle in Warrior II",
      "Engage your deep core to protect the lower back in the balance",
      "Flex the lifted foot and turn the toes slightly toward the floor",
      "Ensure your standing leg is strong and active, with a soft knee",
      "Keep your shoulders relaxed and broad, away from the neck",
    ],
    donts: [
      "Do not allow the front knee to collapse inward or overshoot the toes",
      "Avoid 'dumping' weight into the hip of the standing leg in WIII",
      "Do not hold your breath; use steady exhales to find balance",
      "Avoid looking up suddenly, as this can break your focus and balance",
      "Do not rush the transition between the two poses",
    ],
  },
  "goddess-pose": {
    title: "Goddess Pose (Utkata Konasana)",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
    description:
      "Utkata Konasana, popularly known as Goddess Pose, is a powerful wide-legged squat that honors the internal fire and creative energy within. This pose is significantly more than just a lower-body strengthener; it is a posture of empowerment and deep opening. By sinking the hips while lifting the heart and opening the arms, we target the inner thighs, glutes, and pelvic floor. It is known to build immense heat (Tapas) rapidly, challenging the practitioner to remain calm and radiant even as the muscles begin to burn.",
    benefits: [
      "Dramatically opens the hips, groin, and chest regions",
      "Strengthens the entire lower body, including thighs and calves",
      "Tones the core and improves spinal structural stability",
      "Stimulates the reproductive and urinary systems for health",
      "Helps relieve menstrual discomfort and opens the pelvis",
      "Builds significant physical heat and boosts the metabolism",
      "Improves overall balance and grounded presence in the body",
      "Boosts self-confidence and a sense of internal empowerment",
    ],
    steps: [
      "Step your feet wide apart (about 3 feet) and turn your toes out",
      "Exhale and bend your knees deeply, aiming for a 90-degree angle",
      "Keep your knees tracking directly over your toes for safety",
      "Tuck your tailbone slightly down while lifting the heart upward",
      "Bring your arms into 'cactus' position (90-degree elbows)",
      "Maintain a tall, integrated spine and a soft, steady gaze",
      "Breathe deeply into the belly, feeling the internal fire rise",
    ],
    dos: [
      "Press your knees back toward your pinky toes to open the hips",
      "Keep your shoulders stacked directly over your hips (do not lean)",
      "Distribute your weight evenly across the four corners of both feet",
      "Soften your face and jaw while maintaining physical intensity",
      "Engage your pelvic floor gently as you hold the squat",
    ],
    donts: [
      "Do not allow your knees to collapse inward toward each other",
      "Avoid leaning your torso too far forward; keep the heart lifted",
      "Do not lock your jaw or hold your breath during the hold",
      "Avoid overarching the lower back; keep the tailbone neutral",
      "Do not sacrifice your alignment for a deeper squat",
    ],
  },
  "legs-up-wall": {
    title: "Legs-Up-The-Wall (Viparita Karani)",
    image:
      "https://yogaselection.com/wp-content/uploads/2025/04/viparita-karani-tutorial.jpg",
    description:
      "Viparita Karani, or Legs-Up-The-Wall pose, is one of the most accessible and profoundly effective restorative postures in modern yoga. This gentle inversion works by reversing the direct effects of gravity on the lower body, allowing the heart to rest and the nervous system to switch from 'fight-or-flight' to 'rest-and-digest' mode. It is a vital practice for anyone experiencing mental fatigue, physical exhaustion, or poor circulation. By letting the legs rest against a stable support, the practitioner can experience a deep sense of weightlessness and internal surrender.",
    benefits: [
      "Rapidly reduces swelling and fatigue in the legs and feet",
      "Soothes the central nervous system and significantly reduces anxiety",
      "Relieves lower back tension by flattening the lumbar spine",
      "Promotes better circulation and lymphatic drainage throughout the body",
      "Helps regulate blood pressure and improves respiratory health",
      "Prepares the mind and body for deep, restorative sleep",
      "Provides relief from minor headaches and mental fog",
      "Allows the heart to pump blood more efficiently with less effort",
    ],
    steps: [
      "Sit sideways as close to a wall as possible, hips touching the base",
      "Swing your legs up against the wall while lowering your back to the floor",
      "Ensure your sit-bones are as close to the wall as comfortably possible",
      "Rest your arms by your sides, palms facing up to open the chest",
      "Close your eyes and focus on the sensation of breath in the belly",
      "Hold for 5-15 minutes, allowing gravity to do the work",
      "To exit, bend your knees and roll slowly to one side",
    ],
    dos: [
      "Use a folded blanket or pillow under your hips for added comfort",
      "Keep your neck long and neutral; use a small support if needed",
      "Allow your breath to become slow, effortless, and rhythmic",
      "Focus your internal gaze toward your heart or third eye point",
      "Ensure your environment is quiet and warm during the hold",
    ],
    donts: [
      "Do not force your legs to be perfectly straight; keep knees soft",
      "Avoid this pose if you have serious eye conditions like glaucoma",
      "Do not stay in the pose if you feel sharp tingling in the feet",
      "Avoid during the first few days of a heavy menstrual cycle if uncomfortable",
      "Do not rush out of the pose; transition slowly to avoid dizziness",
    ],
  },
  "downward-dog": {
    title: "Downward-Facing Dog (Adho Mukha Svanasana)",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
    description:
      "Adho Mukha Svanasana, or Downward-Facing Dog, is arguably the most recognizable pose in yoga, serving as a transition, a stretch, and even a resting position in advanced practices. This iconic inversion creates an inverted 'V' shape with the body, providing a comprehensive stretch for the entire back body while simultaneously strengthening the arms, shoulders, and core. It helps to energize the system, quiet the mind, and improve the flow of blood to the brain. It is a fundamental building block for almost every yoga flow.",
    benefits: [
      "Deeply stretches the hamstrings, calves, and Achilles tendons",
      "Strengthens the hands, wrists, arms, and shoulder girdle",
      "Lengthens and decompress the entire spinal column",
      "Calms the brain and helps relieve mild depression and stress",
      "Energizes the body and reduces overall physical fatigue",
      "Improves internal digestion and stimulates abdominal organs",
      "Helps prevent osteoporosis by building upper body bone density",
      "Relieves symptoms of menopause and menstrual discomfort",
    ],
    steps: [
      "Start on your hands and knees in a tabletop position",
      "Spread your fingers wide and press firmly through your palms",
      "Tuck your toes and exhale as you lift your knees off the floor",
      "Reach your sit-bones high toward the ceiling, creating a 'V' shape",
      "Press your heels toward the mat (they do not need to touch)",
      "Pedal your feet slowly to warm up the back of your legs",
      "Hold for 5-10 deep breaths, focusing on spinal length",
    ],
    dos: [
      "Keep your fingers spread wide like a starfish for a solid base",
      "Rotate your upper arms outward to create space in the shoulders",
      "Keep your neck relaxed; let your head hang heavy between your arms",
      "Maintain a micro-bend in your knees if your hamstrings are tight",
      "Engage your lower core to support the lift of your hips",
    ],
    donts: [
      "Do not lock your elbows; keep them active but not rigid",
      "Avoid rounding your upper back; focus on a long, straight spine",
      "Do not shrug your shoulders toward your ears; draw them down",
      "Avoid putting all your weight in the wrists; press into the fingers",
      "Do not hold your breath; maintain a steady Ujjayi flow",
    ],
  },
  "bridge-pose": {
    title: "Bridge Pose (Setu Bandhasana)",
    image:
      "https://plus.unsplash.com/premium_photo-1661751443182-25c0328ddcbe?q=80&w=1170&auto=format&fit=crop",
    description:
      "Setu Bandhasana, or Bridge Pose, is a revitalizing backbend that offers a profound opening for the heart, chest, and shoulders. This posture is particularly effective at countering the 'hunched' posture that comes from prolonged screen use. By lifting the hips and grounding through the feet, the practitioner strengthens the entire posterior chain—glutes, hamstrings, and lower back—while creating space in the front body. It is often used as a preparatory pose for deeper backbends or as a gentle inversion to calm the mind.",
    benefits: [
      "Deeply opens the chest, heart center, and front of the shoulders",
      "Strengthens the glutes, hamstrings, and the entire spinal support",
      "Stimulates the thyroid gland and improves metabolic function",
      "Stretches the hip flexors and abdominal muscles effectively",
      "Calms the brain and helps alleviate mild anxiety and stress",
      "Reduces fatigue and helps soothe tired or heavy legs",
      "Improves internal digestion and alleviates bloating symptoms",
      "Helps relieve symptoms of menopause and menstrual pressure",
    ],
    steps: [
      "Lie on your back with your knees bent and feet flat on the floor",
      "Place your feet hip-width apart and close to your sit-bones",
      "Arms rest alongside your body with palms facing down",
      "Exhale and press your feet and arms firmly into the mat",
      "Lift your hips toward the ceiling, keeping thighs parallel",
      "Interlace your fingers under your back and roll shoulders under",
      "Hold for 30-60 seconds while maintaining a calm, even breath",
    ],
    dos: [
      "Keep your chin away from your chest to protect the neck",
      "Press your shoulders down to increase the lift of your heart",
      "Engage your inner thighs to prevent your knees from splaying",
      "Breathe deeply into your chest and upper abdominal area",
      "Distribute the weight evenly between your feet and shoulders",
    ],
    donts: [
      "Do not turn your head from side to side once you are in the pose",
      "Avoid letting your knees wider than your hips (keep them parallel)",
      "Do not force your hips too high if you feel lower back pinch",
      "Avoid holding your breath; keep the air flowing rhythmically",
      "Do not 'squeeze' your glutes excessively; use the hamstrings too",
    ],
  },
  "mountain-pose": {
    title: "Mountain Pose (Tadasana)",
    image:
      "https://plus.unsplash.com/premium_photo-1682088272871-96c07e895042?q=80&w=1170&auto=format&fit=crop",
    description:
      "Tadasana, or Mountain Pose, is the foundational 'blueprint' for all standing postures in yoga. It teaches the art of standing with perfect integrity, balance, and quiet focus from the ground up. By aligning the body's skeletal structure and engaging the core, this pose creates a sense of profound stability and mountain-like presence. It is a vital practice for correcting daily postural habits, strengthening the lower body, and helping the practitioner find an internal sense of centered calm. Standing in Tadasana is a powerful way to reclaim your physical and mental space.",
    benefits: [
      "Corrects posture and improves spinal alignment significantly",
      "Strengthens the thighs, knees, ankles, and core muscle groups",
      "Firms the abdominal wall and tones the gluteal muscles",
      "Relieves symptoms of flat feet and improves overall balance",
      "Provides mental clarity and reduces internal restlessness",
      "Teaches the body to stand with dignity and minimal effort",
      "Balances the respiratory system by opening the chest cavity",
      "Increases full-body awareness and proprioceptive focus",
    ],
    steps: [
      "Stand with big toes touching and heels slightly separated",
      "Distribute your weight evenly across the four corners of your feet",
      "Engage your thigh muscles and lift your kneecaps gently",
      "Tuck your tailbone slightly and engage your lower abdominals",
      "Roll your shoulders back and down, reaching fingertips toward the mat",
      "Inhale deeply, lengthening the neck and reaching the crown high",
      "Soften your gaze and find a steady point directly ahead",
    ],
    dos: [
      "Maintain a soft, steady focus (Drishti) at eye level",
      "Keep your breath steady, even, and completely natural",
      "Lift the arches of your feet while grounding the big toes",
      "Imagine a string pulling you upward from the very crown of your head",
      "Keep your inner thighs active and subtly drawing together",
    ],
    donts: [
      "Do not lock your knees; keep them active but subtly soft",
      "Avoid tensing your jaw, forehead, or tongue muscles",
      "Do not allow your ribs to 'flare' out forward; keep them integrated",
      "Avoid putting all your weight on your heels or toes alone",
      "Do not hunch your shoulders; keep them broad and grounded",
    ],
  },
  plank: {
    title: "Plank Pose (Phalakasana)",
    image:
      "https://plus.unsplash.com/premium_photo-1661601741915-2a6b6e1596dd?q=80&w=1170&auto=format&fit=crop",
    description:
      "Phalakasana, or Plank Pose, is a quintessential core-stabilizing posture that builds full-body strength and mental grit. This 'powerhouse' pose requires the integration of almost every major muscle group—arms, shoulders, core, glutes, and legs—all working in harmony to maintain a rigid, linear form. Regular practice develops not only physical durability but also 'Tapas' (internal fire) and the mental focus required to remain steady in the face of intensity. It is the literal foundation for many advanced balances and inversions.",
    benefits: [
      "Develops exceptional deep core strength and abdominal tone",
      "Strengthens the arms, wrists, and the entire shoulder girdle",
      "Improves functional posture by stabilizing the spinal column",
      "Builds significant mental stamina and single-pointed focus",
      "Tones the glutes, hamstrings, and quadriceps muscles",
      "Enhances full-body coordination and muscular integration",
      "Increases cardiovascular health when held for longer durations",
      "Promotes better wrist health when alignment is correct",
    ],
    steps: [
      "Start in a high push-up position with hands directly under shoulders",
      "Spread your fingers wide and press firmly through the whole palm",
      "Keep your heels reaching back and your legs fully engaged",
      "Maintain your body in one perfectly straight line from head to heels",
      "Engage your core and tuck your tailbone slightly to protect back",
      "Gaze slightly forward of your hands to keep the neck neutral",
      "Push the floor away to broaden through your shoulder blades",
    ],
    dos: [
      "Press the floor away firmly with your palms and fingertips",
      "Hold the pose for 30-60 seconds while breathing steadily",
      "Imagine your body is as rigid and strong as a wooden plank",
      "Breathe into the back of your ribcage to maintain energy",
      "Keep your inner thighs active and subtly drawing toward center",
    ],
    donts: [
      "Do not 'dip' your hips toward the floor (protect the lower back)",
      "Avoid 'hiking' your hips high like a mountain; keep them level",
      "Do not lock your elbows; keep a micro-bend for joint safety",
      "Avoid shrugging your shoulders toward your ears; keep them back",
      "Do not hold your breath; stay with the rhythmic Ujjayi flow",
    ],
  },
  "seated-forward-bend-gen": {
    title: "Seated Forward Bend",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1170&auto=format&fit=crop",
    description:
      "A deeply introspective posture that stretches the entire back body and prepares the mind for meditation.",
    benefits: [
      "Stretches hamstrings and spine",
      "Massages internal organs",
      "Relieves anxiety",
      "Reduces fatigue",
    ],
    steps: [
      "Sit with legs straight",
      "Inhale and reach up",
      "Exhale and fold forward",
      "Grasp feet or shins",
    ],
    dos: ["Lead with the heart", "Maintain length in spine"],
    donts: ["Don't pull with force", "Avoid rounding the back"],
  },
  "mountain-pose-gen": {
    title: "Mountain Pose (Foundation - Tadasana)",
    image:
      "https://images.unsplash.com/photo-1552286450-4a669f880062?q=80&w=880&auto=format&fit=crop",
    description:
      "Tadasana, or Mountain Pose, serves as the fundamental blueprint for every standing posture in the yoga tradition. This practice focuses on the conscious alignment of the skeletal structure, the engagement of the deep internal stabilizers, and the cultivation of a steady, unwavering presence. By grounding deeply through the feet and lengthening through the crown, the practitioner learns the art of standing with effortless integrity and quiet strength. It is an essential practice for correcting structural habits and fostering a mountain-like stability in both body and mind.",
    benefits: [
      "Corrects and significantly improves overall physical posture",
      "Strengthens the thighs, knee joints, and the ankle complex",
      "Fosters deep concentration and mental single-pointedness",
      "Reduces the physical symptoms and discomfort of flat feet",
      "Tones the abdominal area and firms the gluteal muscles",
      "Balances the respiratory system by encouraging a neutral ribcage",
      "Improves overall physical balance and proprioceptive awareness",
      "Encourages a state of dignified, effortless, and quiet presence",
    ],
    steps: [
      "Stand tall with big toes touching and heels slightly separated",
      "Engage your thigh muscles mindfully and lift the kneecaps",
      "Tuck your tailbone slightly while keeping the pelvis neutral",
      "Roll your shoulders back and down, away from the cervical spine",
      "Draw the lower belly in and up to support the lumbar curve",
      "Inhale deeply to lengthen the neck and reach the crown high",
      "Maintain a soft, steady focus (Drishti) directly ahead",
    ],
    dos: [
      "Keep your breath steady, even, and completely natural",
      "Align your head directly over your heart and heart over pelvis",
      "Keep your jaw, eyes, and forehead muscles relaxed",
      "Lift the inner arches of your feet while grounding the toes",
      "Maintain a subtle micro-bend in the knees for active stability",
    ],
    donts: [
      "Do not lock your knees; this can cut off blood flow and energy",
      "Avoid tensing your throat or clenching your teeth",
      "Do not allow your weight to rest solely on your heels or toes",
      "Avoid 'puffing' the chest; keep the ribs softening inward",
      "Do not sag in the arches of your feet; keep them active",
    ],
  },
};

// ============================================================
// YouTube URLs for each pose
// ============================================================
const poseYoutubeUrls = {
  "sun-salutation": "https://www.youtube.com/watch?v=73sjOu0g58M",
  "mountain-climbers": "https://www.youtube.com/watch?v=nmwgirgXLYM",
  "warrior-2-3": "https://youtu.be/yxNtoOJ9500?si=TrHOs9hdTxgL-RsQ",
  "goddess-pose": "https://youtu.be/wgXefCprLm0?si=rvl9QKYnbIhRtDdi",
  "legs-up-wall": "https://youtu.be/do_1LisFah0?si=Uh4oNggj6U7ekpf6",
  "downward-dog": "https://youtu.be/ayQoxw8sRTk?si=svfcwB_mvan1rnGX",
  "bridge-pose": "https://youtu.be/XUcAuYd7VU0?si=ZHP3h1b31kICzGre",
  "mountain-pose": "https://www.youtube.com/watch?v=2HTvZp5rPrg",
  plank: "https://www.youtube.com/watch?v=ASdvN_XEl_c",
  "seated-forward-fold": "https://youtu.be/SLIaql7h6RQ?si=NOYtwAvyA83YXZUE",
  "stress-relief": "https://youtu.be/jsOqcwcy2mI?si=8D6SAydLWqc4BJ_Y",
  "weight-loss": "https://youtu.be/m756Gz8de4M?si=vR3sugGJSNEF7brb",
  flexibility: "https://www.youtube.com/watch?v=g_tea8ZNk5A",
  "core-strength": "https://www.youtube.com/watch?v=DHD1-2P94DI",
  "heart-health": "https://youtu.be/lISRYHGrKtk?si=10APbi8C9o4dl3Ru",
  "better-sleep": "https://www.youtube.com/watch?v=v7AYKMP6rOE",
  "strength-building": "https://youtu.be/WltkvVB_lfM?si=CwlzI8jQgEN4_Cnj",
  "back-pain": "https://youtu.be/7agiIk9KgyI?si=kPVdiW3KVZkamtJn",
  "immunity-boost": "https://youtu.be/eQ3opMpEcJ8?si=2FlshGnVLHS8ruUk",
  "digestive-health": "https://youtu.be/7agiIk9KgyI?si=kPVdiW3KVZkamtJn",
  "mountain-pose-gen": "https://www.youtube.com/watch?v=2HTvZp5rPrg",
  "downward-dog-gen": "https://youtu.be/7agiIk9KgyI?si=kPVdiW3KVZkamtJn",
  "child-pose": "https://youtu.be/nMp3MlTz9fA?si=1cTMO4u1DigfOGAh",
  "warrior-pose": "https://youtu.be/kkGY3xBnaGc?si=klOzgBOSHh2hoZox",
  "tree-pose": "https://www.youtube.com/watch?v=wdln9qWYloU",
  "bridge-pose-gen": "https://youtu.be/XUcAuYd7VU0?si=MT7cCify-S56YCk6",
  "plank-gen": "https://www.youtube.com/watch?v=ASdvN_XEl_c",
  "cobra-pose": "https://youtu.be/k48O2CxvZ3o?si=mxPIxVoM4iu6-5XV",
  "seated-forward-bend-gen": "https://youtu.be/nMp3MlTz9fA?si=1cTMO4u1DigfOGAh",
  "corpse-pose": "https://youtu.be/do_1LisFah0?si=Uh4oNggj6U7ekpf6",
  "neck-shoulders": "https://youtu.be/X3-gKPNyrTA?si=g3jaTq2CARoVfgjd",
  "spine-back": "https://youtu.be/p39GdEUxxAk?si=02Ul_hfW7yIUHcJe",
  "hips-pelvis": "https://www.youtube.com/watch?v=sTANio_2E0Q",
  "legs-knees": "https://www.youtube.com/watch?v=qULTwquOuT4",
  "arms-wrists": "https://youtu.be/X3-gKPNyrTA?si=rOpyuANHccHIF4Z_",
  "core-abdomen": "https://www.youtube.com/watch?v=DHD1-2P94DI",
  "chest-lungs": "https://youtu.be/kkGY3xBnaGc?si=klOzgBOSHh2hoZox",
  "full-body": "https://www.youtube.com/watch?v=v7AYKMP6rOE",
  "head-brain": "https://youtu.be/m756Gz8de4M?si=vR3sugGJSNEF7brb",
  "hands-fingers": "https://youtu.be/wgXefCprLm0?si=rvl9QKYnbIhRtDdi",
  "cat-cow": "https://www.youtube.com/watch?v=kqnua4rHVVA",
  "cobra-pose-type": "https://www.youtube.com/watch?v=Jo4gV2aLc-I",
  "child-pose-type": "https://www.youtube.com/watch?v=qZ_KamBATAI",
  "spine-back-stretch": "https://www.youtube.com/watch?v=4TE_HqLhKVs",
};

function openYoutubeForPose(poseId) {
  const url =
    poseYoutubeUrls[poseId] ||
    "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(
        (poseId || "yoga pose").replace(/-/g, " ") + " yoga tutorial",
      );
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const knowMoreBtns = document.querySelectorAll(".btn-know-more");
  const modalElement = document.getElementById("pose-modal");

  // ── Card-level "Start Practice" buttons ──
  document.querySelectorAll(".btn-practice").forEach((practiceBtn) => {
    practiceBtn.addEventListener("click", () => {
      // Find sibling "Know More" button to get the pose ID
      const parent = practiceBtn.closest(".modal-btns");
      const knowMoreBtn = parent
        ? parent.querySelector(".btn-know-more")
        : null;
      const poseId = knowMoreBtn
        ? knowMoreBtn.getAttribute("data-pose-id")
        : null;
      openYoutubeForPose(poseId);
    });
  });

  if (modalElement) {
    const modalInstance = new bootstrap.Modal(modalElement);
    let currentPoseId = null; // track which pose is open in modal

    // ── Modal "Start Practice" button ──
    const modalPracticeBtn = modalElement.querySelector(
      ".btn-practice-trigger",
    );
    if (modalPracticeBtn) {
      modalPracticeBtn.addEventListener("click", () => {
        openYoutubeForPose(currentPoseId);
      });
    }

    knowMoreBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const poseId = btn.getAttribute("data-pose-id");
        const pose = poseData[poseId];
        currentPoseId = poseId; // update for modal Start Practice button

        if (pose) {
          // Populate Modal Content
          document.getElementById("poseModalLabel").innerText = pose.title;

          const modalBody = document.getElementById("modal-body-content");
          if (modalBody) {
            modalBody.innerHTML = `
              <div class="modal-image-container mb-4 position-relative">
                <img src="${pose.image}" class="img-fluid rounded shadow-lg" alt="${pose.title}">
                <div class="image-overlay-badge">
                  <span class="badge bg-primary px-3 py-2 rounded-pill"><i class="fas fa-certificate me-2"></i>Certified Pose</span>
                </div>
              </div>
              
              <div class="mb-5 content-card p-4 rounded-4 bg-white border border-light-subtle shadow-sm">
                <span class="section-label mb-2">Pose Overview</span>
                <h4 class="mb-3 fw-bold text-dark">${pose.title}</h4>
                <p class="text-secondary lead fs-6 lh-base">${pose.description}</p>
              </div>

              <div class="row g-4 mb-5">
                <div class="col-md-6">
                  <div class="benefit-card h-100 p-4 rounded-4 bg-white border-start border-4 border-success shadow-sm">
                    <span class="section-label mb-3">Therapeutic Benefits</span>
                    <ul class="list-unstyled mb-0">
                      ${pose.benefits.map((b) => `<li class="mb-3 d-flex align-items-start"><i class="fas fa-check-circle text-success mt-1 me-3"></i><span class="text-secondary small">${b}</span></li>`).join("")}
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="steps-card h-100 p-4 rounded-4 bg-white border-start border-4 border-primary shadow-sm">
                    <span class="section-label mb-3">Practice Guide</span>
                    <ol class="ps-0 mb-0 list-unstyled">
                      ${pose.steps.map((s, index) => `<li class="mb-3 d-flex align-items-start"><div class="step-num me-3 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style="min-width: 28px; height: 28px;">${index + 1}</div><span class="text-secondary small">${s}</span></li>`).join("")}
                    </ol>
                  </div>
                </div>
              </div>

              <div class="guidelines-section">
                <div class="do-box">
                  <h4 class="text-success"><i class="fas fa-thumbs-up"></i>Vital Alignment (Dos)</h4>
                  <ul>
                    ${pose.dos.map((d) => `<li>${d}</li>`).join("")}
                  </ul>
                </div>
                <div class="dont-box">
                  <h4 class="text-danger"><i class="fas fa-thumbs-down"></i>Common Mistakes (Don'ts)</h4>
                  <ul>
                    ${pose.donts.map((d) => `<li>${d}</li>`).join("")}
                  </ul>
                </div>
              </div>
            `;
          }

          modalInstance.show();
        } else {
          console.warn(`No data found for pose ID: ${poseId}`);
          // Temporary fallback for testing
          document.getElementById("poseModalLabel").innerText = "Coming Soon";
          document.getElementById("modal-body-content").innerHTML = `
            <div class="text-center py-5">
              <i class="fas fa-clock fa-3x text-warning mb-3"></i>
              <h3>Detailed information for this pose is being curated.</h3>
              <p class="text-muted">Stay tuned for the full guide!</p>
            </div>
          `;
          modalInstance.show();
        }
      });
    });
  }

  // Meditation CTA: smooth scroll + highlight guided meditation block
  const meditationCta = document.querySelector(".btn-meditation-cta");
  const guidedBlock = document.querySelector("#guided-meditation-programs");

  if (meditationCta && guidedBlock) {
    meditationCta.addEventListener("click", (e) => {
      e.preventDefault();
      guidedBlock.scrollIntoView({ behavior: "smooth", block: "start" });
      guidedBlock.classList.add("section-highlight");
      setTimeout(() => {
        guidedBlock.classList.remove("section-highlight");
      }, 1400);
    });
  }
});

// Navbar Scroll Logic
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
