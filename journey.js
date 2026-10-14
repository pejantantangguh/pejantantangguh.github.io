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
      "name": "Python for integration engineers",
      "weeks": [
        1,
        3
      ]
    },
    {
      "n": 2,
      "name": "LLM APIs in production",
      "weeks": [
        4,
        5
      ]
    },
    {
      "n": 3,
      "name": "Agents and MCP",
      "weeks": [
        6,
        8
      ]
    },
    {
      "n": 4,
      "name": "RAG and evals",
      "weeks": [
        9,
        11
      ]
    },
    {
      "n": 5,
      "name": "Deploy and enterprise readiness",
      "weeks": [
        12,
        13
      ]
    },
    {
      "n": 6,
      "name": "FDE skills and job launch",
      "weeks": [
        14,
        16
      ]
    }
  ],
  "weeks": [
    {
      "title": "Python fast-track: syntax and data",
      "ship": "Order sync CLI (orders to invoice JSON to SQLite)",
      "post": "Why I'm learning Python after 8 years of C# integration work",
      "status": "planned",
      "links": []
    },
    {
      "title": "Python fast-track: async, APIs and tests",
      "ship": "Webhook sync service in FastAPI with tests and a Dockerfile",
      "post": "Webhooks I learned to respect: idempotency, signatures and retries",
      "status": "planned",
      "links": []
    },
    {
      "title": "Data, Git and coding fluency",
      "ship": "Sync service on Postgres with CI passing",
      "post": "Using an AI coding assistant without losing the skill",
      "status": "planned",
      "links": []
    },
    {
      "title": "LLM APIs I: fundamentals",
      "ship": "Ticket triage classifier with measured accuracy and cost",
      "post": "I taught an LLM my old support-ticket taxonomy. Here's the accuracy.",
      "status": "planned",
      "links": []
    },
    {
      "title": "LLM APIs II: tools and prompts",
      "ship": "Triage agent that looks up order status and drafts replies",
      "post": "Writing an agent loop by hand, no framework",
      "status": "planned",
      "links": []
    },
    {
      "title": "MCP I: Project 1 starts",
      "ship": "Shop Ops MCP server for digital3d",
      "post": "I built an MCP server for my own online shop",
      "status": "planned",
      "links": []
    },
    {
      "title": "MCP II and agents",
      "ship": "Daily stock agent with an exceptions report",
      "post": "Read tools vs write tools: making an agent safe for a real shop",
      "status": "planned",
      "links": []
    },
    {
      "title": "Ship Project 1",
      "ship": "Project 1 public: repo, demo video, case study",
      "post": "Project 1 case study: from a shop owner's problem to a working agent",
      "status": "planned",
      "links": []
    },
    {
      "title": "RAG I: Project 2 starts",
      "ship": "Integration Docs Copilot, first version",
      "post": "I turned API docs into a copilot. Chunking mattered more than the model.",
      "status": "planned",
      "links": []
    },
    {
      "title": "Evals (holiday week)",
      "ship": "40-question English golden set and baseline scores",
      "post": "How I measure whether my AI app is actually right",
      "status": "planned",
      "links": []
    },
    {
      "title": "Bahasa Indonesia evals (holiday week)",
      "ship": "Eval report: English vs Indonesian, before vs after",
      "post": "How well do LLMs handle Bahasa Indonesia? I tested it.",
      "status": "planned",
      "links": []
    },
    {
      "title": "Deploy",
      "ship": "Project 3: Project 2 live on Azure with auth and logging",
      "post": "Taking an AI app from laptop to Azure: what broke",
      "status": "planned",
      "links": []
    },
    {
      "title": "Enterprise readiness",
      "ship": "Threat model and red-team results for Project 2",
      "post": "I tried 20 prompt-injection attacks on my own app",
      "status": "planned",
      "links": []
    },
    {
      "title": "FDE skills",
      "ship": "AI opportunity assessment, SOW and a take-home simulation",
      "post": "Scoping an AI project: the SOW template I use",
      "status": "planned",
      "links": []
    },
    {
      "title": "Portfolio and positioning",
      "ship": "Portfolio page, resume v2, three demo videos",
      "post": "16 weeks, 3 projects: what I'd do differently",
      "status": "planned",
      "links": []
    },
    {
      "title": "Launch",
      "ship": "Next 8-week plan",
      "post": "What's next after my FDE training plan",
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
