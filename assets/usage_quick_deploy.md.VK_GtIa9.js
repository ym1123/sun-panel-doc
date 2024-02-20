import{_ as a,o as s,c as e,R as t}from"./chunks/framework.FXEhv0el.js";const m=JSON.parse('{"title":"Deployment Tutorial","description":"","frontmatter":{},"headers":[],"relativePath":"usage/quick_deploy.md","filePath":"usage/quick_deploy.md","lastUpdated":1708443078000}'),i={name:"usage/quick_deploy.md"},n=t(`<h1 id="deployment-tutorial" tabindex="-1">Deployment Tutorial <a class="header-anchor" href="#deployment-tutorial" aria-label="Permalink to &quot;Deployment Tutorial&quot;">​</a></h1><h2 id="default-account-and-password" tabindex="-1">Default Account and Password <a class="header-anchor" href="#default-account-and-password" aria-label="Permalink to &quot;Default Account and Password&quot;">​</a></h2><p>Username: <a href="mailto:admin@sun.cc" target="_blank" rel="noreferrer">admin@sun.cc</a></p><p>Password: 12345678</p><h2 id="command-line-parameters" tabindex="-1">Command Line Parameters <a class="header-anchor" href="#command-line-parameters" aria-label="Permalink to &quot;Command Line Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>-h</td><td>View command instructions</td></tr><tr><td>-config</td><td>Generate the configuration file (conf/conf.ini)</td></tr><tr><td>-password-reset</td><td>Reset the password of the first management account</td></tr></tbody></table><h2 id="docker-run" tabindex="-1">Docker Run <a class="header-anchor" href="#docker-run" aria-label="Permalink to &quot;Docker Run&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>DockerHub <a href="https://hub.docker.com/r/hslr/sun-panel" target="_blank" rel="noreferrer">Sun-Panel Project Page</a></p></div><p>Directory mounting <code>-v</code>,all optional, choose according to your own needs:</p><table><thead><tr><th>Container Directory</th><th>Description</th></tr></thead><tbody><tr><td>/app/conf</td><td>Configuration file</td></tr><tr><td>/app/uploads</td><td>Uploaded files</td></tr><tr><td>/app/database</td><td>Database files</td></tr><tr><td>/app/runtime</td><td>Runtime logs (not recommended for mounting)</td></tr><tr><td>/app/web/custom</td><td>Custom (JS, CSS, ...)<code>v1.3.0+</code></td></tr></tbody></table><ol><li>Pull the image</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>Directly download and run</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3002</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/uploads:/app/uploads</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/database:/app/database</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="binary-file-run" tabindex="-1">Binary File Run <a class="header-anchor" href="#binary-file-run" aria-label="Permalink to &quot;Binary File Run&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Go to GitHub <a href="https://github.com/hslr-s/sun-panel/releases" target="_blank" rel="noreferrer">Releases</a> to download binary files.</p></div><p>Example execution</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,18),l=[n];function r(d,p,o,h,c,u){return s(),e("div",null,l)}const b=a(i,[["render",r]]);export{m as __pageData,b as default};