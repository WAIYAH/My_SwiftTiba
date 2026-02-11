/**
 * SwiftTiba — AI Health Chatbot
 * Keyword-based symptom checker with conversational UI
 */

(function() {
  'use strict';

  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const quickReplies = document.getElementById('quickReplies');

  // Chat knowledge base
  const responses = {
    greetings: {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'jambo', 'habari'],
      reply: "Hello! I'm the SwiftTiba Health Assistant. 👋 I can help you with:\n\n• Symptom assessment\n• First aid guidance\n• Finding hospitals in Nairobi\n• General health information\n\nHow can I help you today?"
    },
    chestPain: {
      keywords: ['chest pain', 'chest hurts', 'heart pain', 'heart attack', 'chest tightness', 'chest pressure'],
      reply: "⚠️ <strong>Chest pain can be a sign of a serious medical emergency.</strong>\n\nIf you or someone is experiencing:\n• Crushing or squeezing chest pain\n• Pain spreading to the arm, jaw, or back\n• Shortness of breath\n• Nausea or cold sweats\n\n<strong>Call 999 immediately.</strong>\n\nWhile waiting for help:\n1. Sit down and rest in a comfortable position\n2. Chew an aspirin (300mg) if available and not allergic\n3. Loosen any tight clothing\n4. Stay calm and take slow breaths\n\n<a href='tel:999' style='color:var(--color-emergency);font-weight:700;'>📞 Call 999 Now</a> | <a href='first-aid.html' style='color:var(--color-primary);font-weight:600;'>View First Aid Guide →</a>",
      severity: 'critical'
    },
    fever: {
      keywords: ['fever', 'high temperature', 'feeling hot', 'chills', 'sweating'],
      reply: "🌡️ <strong>Fever Management Guidance:</strong>\n\nFor adults:\n1. Stay hydrated — drink plenty of water and fluids\n2. Rest in a comfortable, cool environment\n3. Take paracetamol or ibuprofen as directed on the package\n4. Wear lightweight, breathable clothing\n5. Use a damp cloth on your forehead\n\n<strong>Seek medical attention if:</strong>\n• Temperature exceeds 39.4°C (103°F)\n• Fever persists for more than 3 days\n• You experience confusion, stiff neck, or rash\n• You have difficulty breathing\n\n<a href='hospital.html' style='color:var(--color-primary);font-weight:600;'>Find a Hospital →</a>",
      severity: 'moderate'
    },
    bleeding: {
      keywords: ['bleeding', 'blood', 'wound', 'cut', 'laceration', 'hemorrhage'],
      reply: "🩸 <strong>Bleeding First Aid:</strong>\n\n<strong>For severe bleeding:</strong>\n1. Apply firm, direct pressure with a clean cloth\n2. Do NOT remove the cloth — add more layers if needed\n3. Elevate the injured area above the heart if possible\n4. Call 999 if bleeding won't stop after 10 minutes\n5. Keep the person calm and warm\n\n<strong>For minor cuts:</strong>\n1. Clean the wound with clean water\n2. Apply antiseptic if available\n3. Cover with a sterile bandage\n4. Watch for signs of infection\n\n<a href='first-aid.html#severe-bleeding' style='color:var(--color-primary);font-weight:600;'>Detailed Bleeding Guide →</a> | <a href='tel:999' style='color:var(--color-emergency);font-weight:700;'>📞 Call 999</a>",
      severity: 'urgent'
    },
    hospital: {
      keywords: ['hospital', 'clinic', 'doctor', 'nearest hospital', 'find hospital', 'medical center', 'health facility'],
      reply: "🏥 <strong>Finding a Hospital:</strong>\n\nSwiftTiba has a directory of 10+ hospitals in Nairobi with:\n• Interactive map with directions\n• Contact numbers for direct calling\n• Hospital type and level information\n• Emergency department availability\n\n<a href='hospital.html' style='color:var(--color-primary);font-weight:700;'>🗺️ Open Hospital Locator →</a>\n\nFor immediate emergency care, call <a href='tel:999' style='color:var(--color-emergency);font-weight:700;'>999</a>.",
      severity: 'info'
    },
    cpr: {
      keywords: ['cpr', 'not breathing', 'unconscious', 'no pulse', 'cardiac arrest', 'resuscitation'],
      reply: "❤️ <strong>CPR (Cardiopulmonary Resuscitation):</strong>\n\n<strong>Call 999 first!</strong> Then begin CPR:\n\n1. Place person on a firm, flat surface\n2. Put the heel of your hand on the center of their chest\n3. Place your other hand on top, interlace fingers\n4. Push hard and fast — at least 5cm deep, 100-120 pushes/minute\n5. Allow chest to fully recoil between compressions\n6. If trained, give 2 rescue breaths after every 30 compressions\n7. Continue until emergency services arrive\n\n<strong>🎵 Push to the beat of 'Stayin' Alive' by Bee Gees</strong>\n\n<a href='first-aid.html' style='color:var(--color-primary);font-weight:700;'>📖 Full CPR Guide →</a> | <a href='tel:999' style='color:var(--color-emergency);font-weight:700;'>📞 Call 999</a>",
      severity: 'critical'
    },
    choking: {
      keywords: ['choking', 'cant breathe', "can't breathe", 'something stuck', 'throat blocked', 'airway'],
      reply: "🫁 <strong>Choking First Aid:</strong>\n\n<strong>For adults/children over 1 year:</strong>\n1. Encourage coughing if they still can\n2. Give up to 5 sharp back blows between shoulder blades\n3. If that fails, give up to 5 abdominal thrusts (Heimlich maneuver)\n4. Alternate between back blows and abdominal thrusts\n5. Call 999 if the blockage doesn't clear\n\n<strong>⚠️ If the person becomes unconscious, begin CPR immediately.</strong>\n\n<a href='first-aid.html' style='color:var(--color-primary);font-weight:700;'>📖 Full Choking Guide →</a>",
      severity: 'critical'
    },
    burns: {
      keywords: ['burn', 'burns', 'scalded', 'boiling water', 'fire burn', 'hot oil'],
      reply: "🔥 <strong>Burns First Aid:</strong>\n\n1. Cool the burn under cool (not cold) running water for at least 20 minutes\n2. Remove clothing/jewelry near the burn (unless stuck to skin)\n3. Cover with cling film or a clean, non-fluffy dressing\n4. Do NOT apply ice, butter, toothpaste, or creams\n5. Take paracetamol for pain relief\n\n<strong>Seek emergency care if:</strong>\n• Burn is larger than the person's palm\n• Burn is on the face, hands, feet, joints, or genitals\n• Burn is deep (white/charred appearance)\n• Person is a child, elderly, or has breathing difficulties\n\n<a href='first-aid.html' style='color:var(--color-primary);font-weight:600;'>Burns Guide →</a>",
      severity: 'urgent'
    },
    fractures: {
      keywords: ['fracture', 'broken bone', 'broken arm', 'broken leg', 'sprain', 'dislocation'],
      reply: "🦴 <strong>Fracture First Aid:</strong>\n\n1. Keep the injured area still — do NOT try to realign the bone\n2. Apply a splint or improvised support if possible\n3. Apply ice wrapped in a cloth for 15–20 minutes\n4. Elevate the injured limb if possible\n5. Call 999 or get to a hospital\n\n<strong>⚠️ Call 999 immediately if:</strong>\n• The bone is visible through the skin\n• The injured area looks deformed\n• There is heavy bleeding\n• The person cannot feel below the injury\n\n<a href='first-aid.html' style='color:var(--color-primary);font-weight:600;'>Fractures Guide →</a> | <a href='hospital.html' style='color:var(--color-primary);font-weight:600;'>Find Hospital →</a>",
      severity: 'urgent'
    },
    headache: {
      keywords: ['headache', 'migraine', 'head hurts', 'head pain'],
      reply: "🤕 <strong>Headache Guidance:</strong>\n\n<strong>For common headaches:</strong>\n1. Stay hydrated — dehydration is a common cause\n2. Rest in a quiet, dark room\n3. Take paracetamol or ibuprofen as directed\n4. Apply a cool compress to your forehead\n5. Try gentle neck and shoulder stretches\n\n<strong>⚠️ Seek emergency care if the headache:</strong>\n• Comes on suddenly and is extremely severe\n• Is accompanied by confusion, vision problems, or weakness\n• Follows a head injury\n• Comes with a stiff neck and fever\n• Is the worst headache you've ever had\n\n<a href='hospital.html' style='color:var(--color-primary);font-weight:600;'>Find a Doctor →</a>",
      severity: 'moderate'
    },
    thanks: {
      keywords: ['thank', 'thanks', 'thank you', 'appreciated', 'helpful'],
      reply: "You're welcome! 😊 I'm always here to help with health questions. Remember:\n\n• For emergencies, always call <strong>999</strong>\n• Use our <a href='first-aid.html' style='color:var(--color-primary);'>First Aid guides</a> for step-by-step help\n• Find nearby hospitals on our <a href='hospital.html' style='color:var(--color-primary);'>Hospital Locator</a>\n\nStay safe! 💚"
    },
    goodbye: {
      keywords: ['bye', 'goodbye', 'see you', 'later', 'quit', 'exit'],
      reply: "Goodbye! Take care and stay safe. 💚\n\nRemember, if you ever need emergency help, call <strong>999</strong> or <strong>112</strong>. SwiftTiba is always here for you."
    }
  };

  const defaultReply = "I'm not sure I understand that specific question. Could you try rephrasing it?\n\nI can help with:\n• <strong>Symptoms</strong> — chest pain, fever, headache, bleeding\n• <strong>First aid</strong> — CPR, choking, burns, fractures\n• <strong>Hospitals</strong> — finding nearby medical facilities\n\nOr try one of the quick reply buttons below. For emergencies, call <a href='tel:999' style='color:var(--color-emergency);font-weight:700;'>999</a>.";

  // Severity indicator classes
  const severityClasses = {
    critical: 'severity-critical',
    urgent: 'severity-urgent',
    moderate: 'severity-moderate',
    info: 'severity-info'
  };

  // Initialize chat
  function init() {
    addBotMessage("Hello! I'm the <strong>SwiftTiba Health Assistant</strong>. 👋\n\nI can help you with:\n• Symptom assessment & guidance\n• First aid instructions\n• Finding hospitals in Nairobi\n• General health information\n\nType a question or tap a quick reply below to get started!", false);
    chatInput.focus();
  }

  // Add bot message
  function addBotMessage(text, animate = true) {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-bubble bot' + (animate ? ' chat-animate' : '');

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.innerHTML = '<i class="fas fa-robot"></i>';

    const content = document.createElement('div');
    content.className = 'chat-content';
    content.innerHTML = text.replace(/\n/g, '<br>');

    const time = document.createElement('div');
    time.className = 'chat-time';
    time.textContent = getTimeString();

    wrapper.appendChild(avatar);
    const msgBody = document.createElement('div');
    msgBody.appendChild(content);
    msgBody.appendChild(time);
    wrapper.appendChild(msgBody);

    chatMessages.appendChild(wrapper);
    scrollToBottom();
  }

  // Add user message
  function addUserMessage(text) {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-bubble user chat-animate';

    const content = document.createElement('div');
    content.className = 'chat-content';
    content.textContent = text;

    const time = document.createElement('div');
    time.className = 'chat-time';
    time.textContent = getTimeString();

    const msgBody = document.createElement('div');
    msgBody.appendChild(content);
    msgBody.appendChild(time);
    wrapper.appendChild(msgBody);

    chatMessages.appendChild(wrapper);
    scrollToBottom();
  }

  // Add typing indicator
  function showTyping() {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-bubble bot chat-animate';
    wrapper.id = 'typingIndicator';

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.innerHTML = '<i class="fas fa-robot"></i>';

    const content = document.createElement('div');
    content.className = 'chat-content typing-dots';
    content.innerHTML = '<span></span><span></span><span></span>';

    wrapper.appendChild(avatar);
    const msgBody = document.createElement('div');
    msgBody.appendChild(content);
    wrapper.appendChild(msgBody);

    chatMessages.appendChild(wrapper);
    scrollToBottom();
  }

  function hideTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
  }

  // Get response for user input
  function getResponse(input) {
    const lowerInput = input.toLowerCase().trim();

    for (const key of Object.keys(responses)) {
      const entry = responses[key];
      for (const keyword of entry.keywords) {
        if (lowerInput.includes(keyword)) {
          return entry;
        }
      }
    }

    return { reply: defaultReply, severity: null };
  }

  // Handle send
  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    addUserMessage(text);
    chatInput.value = '';
    chatInput.focus();

    // Show typing indicator
    showTyping();

    // Simulate response delay (400-900ms)
    const delay = 400 + Math.random() * 500;
    setTimeout(() => {
      hideTyping();
      const response = getResponse(text);
      addBotMessage(response.reply);
    }, delay);
  }

  // Event listeners
  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  });

  // Quick replies
  quickReplies.addEventListener('click', function(e) {
    const btn = e.target.closest('.quick-reply-btn');
    if (!btn) return;
    const msg = btn.getAttribute('data-message');
    chatInput.value = msg;
    handleSend();
  });

  // Helper: scroll to bottom
  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Helper: get time string
  function getTimeString() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
