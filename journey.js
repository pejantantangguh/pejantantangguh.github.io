/*
  Learning-in-public log for the "Journey" section on index.html.

  To update after each week:
    - set "status" to "in-progress" or "shipped"
    - add links to the week's post, repo or video, e.g.
        "links": [{"label": "LinkedIn post", "url": "https://..."},
                  {"label": "Repo", "url": "https://github.com/..."}]
*/
window.JOURNEY = {
  "start": "2026-10-19",
  "phases": [
    {
      "n": 1,
      "name": "Python foundations",
      "weeks": [
        1,
        4
      ]
    },
    {
      "n": 2,
      "name": "APIs and automation",
      "weeks": [
        5,
        7
      ]
    },
    {
      "n": 3,
      "name": "LLMs in workflows",
      "weeks": [
        8,
        11
      ]
    },
    {
      "n": 4,
      "name": "Knowledge assistants and MCP",
      "weeks": [
        12,
        15
      ]
    },
    {
      "n": 5,
      "name": "Implementation craft",
      "weeks": [
        16,
        18
      ]
    },
    {
      "n": 6,
      "name": "Portfolio and launch",
      "weeks": [
        19,
        20
      ]
    }
  ],
  "weeks": [
    {
      "title": "Python I: write your own code",
      "ship": "Order summary script on GitHub",
      "post": "I'm moving from integration support into AI implementation. Here's my 20-week plan.",
      "status": "planned",
      "links": []
    },
    {
      "title": "Python II: files and data",
      "ship": "Two-file reconciliation script",
      "post": "8 years of integrations taught me most 'API problems' are really data problems",
      "status": "planned",
      "links": []
    },
    {
      "title": "Python III: calling APIs",
      "ship": "Product pull and low-stock report",
      "post": "Build log: my first Python script talking to a real API",
      "status": "planned",
      "links": []
    },
    {
      "title": "Python IV and the 4-week check",
      "ship": "Clean repo with three working scripts",
      "post": "4 weeks of writing Python myself, no AI writing it. What was hard.",
      "status": "planned",
      "links": []
    },
    {
      "title": "APIs and webhooks",
      "ship": "Webhook to Xero draft invoice",
      "post": "Webhooks explained for people who aren't engineers",
      "status": "planned",
      "links": []
    },
    {
      "title": "Automation platforms",
      "ship": "Project 1 working end to end",
      "post": "n8n vs Make vs Zapier for a small business: which I'd pick",
      "status": "planned",
      "links": []
    },
    {
      "title": "Ship Project 1",
      "ship": "Project 1: order-to-invoice automation (repo, case study, demo)",
      "post": "Demo: I automated order-to-invoice with n8n and Python",
      "status": "planned",
      "links": []
    },
    {
      "title": "LLM APIs",
      "ship": "Email extraction with measured accuracy and cost",
      "post": "What an LLM call actually costs a small business",
      "status": "planned",
      "links": []
    },
    {
      "title": "LLMs inside workflows",
      "ship": "Project 2 working draft",
      "post": "Can AI reply to customers in Bahasa Indonesia? I tested it.",
      "status": "planned",
      "links": []
    },
    {
      "title": "Measuring quality (holiday week)",
      "ship": "40-email golden set and first scores",
      "post": "10 weeks into my AI implementation pivot: what's working",
      "status": "planned",
      "links": []
    },
    {
      "title": "Ship Project 2 (holiday week)",
      "ship": "Project 2: bilingual support inbox triage",
      "post": "Demo: AI triage for a support inbox in English and Bahasa",
      "status": "planned",
      "links": []
    },
    {
      "title": "Knowledge bases",
      "ship": "Project 3 first version",
      "post": "RAG explained with an online shop's FAQ",
      "status": "planned",
      "links": []
    },
    {
      "title": "Quality and Bahasa",
      "ship": "English vs Bahasa scores, before and after",
      "post": "How I stop an AI assistant making things up",
      "status": "planned",
      "links": []
    },
    {
      "title": "Agents and MCP",
      "ship": "Stock lookup through your own MCP server",
      "post": "I connected Claude to my own online shop",
      "status": "planned",
      "links": []
    },
    {
      "title": "Ship Project 3",
      "ship": "Project 3: bilingual knowledge assistant with eval report",
      "post": "Demo and numbers: my bilingual AI assistant, English vs Bahasa",
      "status": "planned",
      "links": []
    },
    {
      "title": "Implementation craft I: discovery and scoping",
      "ship": "Opportunity assessment, SOW and ROI model",
      "post": "The 10 questions I ask before building any AI workflow",
      "status": "planned",
      "links": []
    },
    {
      "title": "Implementation craft II: rollout",
      "ship": "Project 4: AI implementation pack",
      "post": "What rolling out new systems to frontline staff taught me",
      "status": "planned",
      "links": []
    },
    {
      "title": "Enterprise platforms",
      "ship": "A slice of Project 3 rebuilt in Copilot Studio",
      "post": "Copilot Studio vs building it yourself",
      "status": "planned",
      "links": []
    },
    {
      "title": "Portfolio and positioning",
      "ship": "Portfolio page, resume v2, demo reel",
      "post": "4 projects in 19 weeks: my AI implementation portfolio",
      "status": "planned",
      "links": []
    },
    {
      "title": "Interview-ready",
      "ship": "Next 8-week plan",
      "post": "20 weeks later: what changed",
      "status": "planned",
      "links": []
    }
  ]
};

(function () {
  var J = window.JOURNEY;
  var list = document.getElementById('journeyWeeks');
  var phasesBox = document.getElementById('journeyPhases');
  var nowBox = document.getElementById('journeyNow');
  if (!J || !list) return;

  function parse(s) { var a = s.split('-').map(Number); return new Date(a[0], a[1] - 1, a[2]); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function fmt(d) { return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  var start = parse(J.start);
  var today = new Date(); today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  var dayIdx = Math.round((today - start) / 86400000);
  var current = dayIdx < 0 ? -1 : Math.min(Math.floor(dayIdx / 7), J.weeks.length - 1);
  var shipped = J.weeks.filter(function (w) { return w.status === 'shipped'; }).length;

  if (nowBox) {
    if (dayIdx < 0) nowBox.textContent = 'Starts ' + fmt(start) + ' ' + start.getFullYear() + ' · 0 of ' + J.weeks.length + ' weeks shipped';
    else if (dayIdx >= J.weeks.length * 7) nowBox.textContent = 'Complete · ' + shipped + ' of ' + J.weeks.length + ' weeks shipped';
    else nowBox.textContent = 'Week ' + (current + 1) + ' of ' + J.weeks.length + ' · ' + shipped + ' shipped';
  }

  if (phasesBox) {
    J.phases.forEach(function (p) {
      var item = el('div', 'journey-phase');
      if (current >= p.weeks[0] - 1 && current <= p.weeks[1] - 1) item.classList.add('is-current');
      item.appendChild(el('span', 'journey-phase-weeks', 'Weeks ' + p.weeks[0] + '–' + p.weeks[1]));
      item.appendChild(el('span', 'journey-phase-name', p.name));
      phasesBox.appendChild(item);
    });
  }

  var labels = { planned: 'Planned', 'in-progress': 'In progress', shipped: 'Shipped' };
  J.weeks.forEach(function (w, i) {
    var li = el('li', 'journey-week status-' + w.status);
    if (i === current) li.classList.add('is-current');
    var head = el('div', 'journey-week-head');
    var ws = addDays(start, i * 7);
    head.appendChild(el('span', 'journey-week-num', 'W' + String(i + 1).padStart(2, '0')));
    head.appendChild(el('span', 'journey-week-date', fmt(ws) + ' – ' + fmt(addDays(ws, 6))));
    var st = el('span', 'tag journey-status', i === current && w.status === 'planned' ? 'This week' : labels[w.status] || 'Planned');
    head.appendChild(st);
    li.appendChild(head);
    li.appendChild(el('h3', null, w.title));
    var ship = el('p', 'journey-ship'); ship.appendChild(el('span', 'journey-label', 'Ships')); ship.appendChild(document.createTextNode(w.ship));
    li.appendChild(ship);
    var post = el('p', 'journey-post'); post.appendChild(el('span', 'journey-label', 'Write-up')); post.appendChild(document.createTextNode(w.post));
    li.appendChild(post);
    if (w.links && w.links.length) {
      var row = el('div', 'tag-row journey-links');
      w.links.forEach(function (l) {
        var a = el('a', 'tag', l.label); a.href = l.url; a.target = '_blank'; a.rel = 'noopener'; row.appendChild(a);
      });
      li.appendChild(row);
    }
    list.appendChild(li);
  });
})();
