import{_ as s,o as a,c as n,R as i}from"./chunks/framework.FXEhv0el.js";const u=JSON.parse('{"title":"Configuration file","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/config.md","filePath":"advanced/config.md","lastUpdated":1708519364000}'),e={name:"advanced/config.md"},l=i(`<h1 id="configuration-file" tabindex="-1">Configuration file <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration file&quot;">​</a></h1><p>Configuration file: <code>conf/conf.ini</code></p><p>The file <code>./conf/conf.example.ini</code> is the complete configuration for the current version of the software. It gets overwritten and updated every time the software is launched. If the configuration file is damaged, you can simply rename it to <code>conf.ini</code>.</p><p>For reference on the configuration file, please consider the <code>./conf/conf.ini</code> in your program.</p><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Basic configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[base]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Web run port. Default:3002</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http_port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3002</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Database driver [mysql/sqlite(Default)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">database_drive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=sqlite</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Cache driver [redis/memory(Default)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cache_drive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=memory</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Queue driver [redis/memory(Default)]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">queue_drive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=memory</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># File cache path (Please start with the current path &#39;./&#39;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Warning: The files that have been uploaded after the modification cannot be accessed</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">source_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./uploads</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># File cache path.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">source_temp_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./runtime/temp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Mysql database driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mysql]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3306</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=root</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=root</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">db_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=sun_panel</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">wait_timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sqlite database driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[sqlite]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">file_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=./database/database.db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># redis database driver</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ======================</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[redis]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1:6379</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=sun_panel:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,5),p=[l];function r(t,h,k,c,d,o){return a(),n("div",null,p)}const g=s(e,[["render",r]]);export{u as __pageData,g as default};