import{_ as s,c as a,o as t,a4 as e}from"./chunks/framework.DwllrC-1.js";const m=JSON.parse('{"title":"Deployment Tutorial","description":"","frontmatter":{},"headers":[],"relativePath":"usage/quick_deploy.md","filePath":"usage/quick_deploy.md","lastUpdated":1712843838000}'),i={name:"usage/quick_deploy.md"},n=e(`<h1 id="deployment-tutorial" tabindex="-1">Deployment Tutorial <a class="header-anchor" href="#deployment-tutorial" aria-label="Permalink to &quot;Deployment Tutorial&quot;">​</a></h1><h2 id="default-account-and-password" tabindex="-1">Default Account and Password <a class="header-anchor" href="#default-account-and-password" aria-label="Permalink to &quot;Default Account and Password&quot;">​</a></h2><p>Username: <strong><a href="mailto:admin@sun.cc" target="_blank" rel="noreferrer">admin@sun.cc</a></strong></p><p>Password: <strong>12345678</strong></p><h2 id="command-parameters" tabindex="-1">Command Parameters <a class="header-anchor" href="#command-parameters" aria-label="Permalink to &quot;Command Parameters&quot;">​</a></h2><details class="details custom-block"><summary>Click here to view <code>v1.4.0-beta24-04-11+</code></summary><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>-h</td><td>View command instructions</td></tr><tr><td>-cfgInit</td><td>Generate configuration file (conf/conf.ini)</td></tr><tr><td>-cfgPath</td><td>Specify the directory of the program configuration file (default &quot;./conf&quot;)</td></tr><tr><td>-pwdReset</td><td>Reset the password of the first admin account</td></tr></tbody></table></details><div class="info custom-block"><p class="custom-block-title">Versions <code>v1.3.0</code> and earlier</p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>-h</td><td>View command instructions</td></tr><tr><td>-config</td><td>Generate configuration file (conf/conf.ini)</td></tr><tr><td>-password-reset</td><td>Reset the password of the first admin account</td></tr></tbody></table></div><h2 id="docker-run" tabindex="-1">Docker Run <a class="header-anchor" href="#docker-run" aria-label="Permalink to &quot;Docker Run&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>DockerHub <a href="https://hub.docker.com/r/hslr/sun-panel" target="_blank" rel="noreferrer">Sun-Panel project homepage</a></p></div><details class="details custom-block"><summary>Click here to view <code>v1.4.0-beta24-02-20+</code></summary><p>If you are upgrading from version <code>v1.3.0</code> or earlier to this version, <a href="https://github.com/hslr-s/sun-panel/discussions/98" target="_blank" rel="noreferrer">please refer to this note</a></p><p>Directory mounts <code>-v</code>, all optional, choose according to your needs:</p><table><thead><tr><th>Container Directory</th><th>Description</th></tr></thead><tbody><tr><td>/app/conf</td><td>Configuration file (all-in-one directory)</td></tr><tr><td>/app/runtime</td><td>Runtime logs (not recommended to mount)</td></tr></tbody></table></details><div class="info custom-block"><p class="custom-block-title"><strong>Versions <code>v1.3.0</code> and earlier</strong></p><p>Directory mounts <code>-v</code>, all optional, choose according to your needs:</p><table><thead><tr><th>Container Directory</th><th>Description</th></tr></thead><tbody><tr><td>/app/conf</td><td>Configuration file</td></tr><tr><td>/app/uploads</td><td>Uploaded files</td></tr><tr><td>/app/database</td><td>Database files</td></tr><tr><td>/app/runtime</td><td>Runtime logs (not recommended to mount)</td></tr><tr><td>/app/web/custom</td><td>Custom (js, css, etc.) <code>v1.3.0+</code></td></tr></tbody></table></div><ol><li>Pull the image</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hslr/sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>Run directly</li></ol><details class="details custom-block"><summary>Click here to view <code>v1.4.0-beta24-02-20+</code></summary><p>Please replace the version number: <code>1.4.0-beta24-02-20</code></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3002:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel:1.4.0-beta24-02-20</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><div class="info custom-block"><p class="custom-block-title"><strong>Versions <code>v1.3.0</code> and earlier</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3002:3002</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/conf:/app/conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/uploads:/app/uploads</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">~/docker_data/sun-panel/database:/app/database</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sun-panel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hslr/sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><h2 id="binary-file-run" tabindex="-1">Binary File Run <a class="header-anchor" href="#binary-file-run" aria-label="Permalink to &quot;Binary File Run&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Go to GitHub <a href="https://github.com/hslr-s/sun-panel/releases" target="_blank" rel="noreferrer">Releases</a> to download binary files.</p></div><p>Example execution</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./sun-panel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,20),r=[n];function l(d,o,p,h,c,k){return t(),a("div",null,r)}const b=s(i,[["render",l]]);export{m as __pageData,b as default};