// Blog content translations - Static approach for reliability
const blogTranslations = {
    // Index page translations
    "blog-index": {
        zh: {
            pageTitle: "技术博客",
            pageDesc: "分享云原生、嵌入式与分布式系统的学习心得",
            cloudComputing: "云计算",
            embeddedSoftware: "嵌入式软件",
            readMore: "阅读全文 →",
            "aws-ec2": "AWS EC2 入门指南：如何在云端启动你的第一台服务器",
            "aws-s3": "AWS S3 入门指南：云存储完全掌握",
            "openmv-electric-contest": "2020 电赛 F 题总结回顾 — OpenMV 实现视觉方案",
            "pn532-nfc-tutorial": "使用 PN532 将全加密卡复制到手环上 — NFC 校园门禁卡模拟教程",
            "aws-ec2-desc": "本篇文章将带你深入了解 Amazon EC2 的核心概念，学习如何配置安全组、选择实例类型，并完成你的第一台云服务器部署。",
            "aws-s3-desc": "深入学习 AWS S3 的存储桶配置、权限管理、版本控制和安全最佳实践，轻松构建可靠的对象存储解决方案。",
            "openmv-desc": "2020 年全国大学生电子设计竞赛 F 题《简易无接触温度测量与身份识别装置》方案总结，使用 OpenMV H7 Plus 实现人脸识别、口罩检测等功能。",
            "pn532-desc": "详细记录如何使用 PN532 模块和 UID 卡，将全加密校园门禁卡模拟到智能手环上，包含材料准备、破解步骤、模拟教程等完整指南。"
        },
        en: {
            pageTitle: "Tech Blog",
            pageDesc: "Sharing insights on Cloud Native, Embedded Systems & Distributed Systems",
            cloudComputing: "Cloud Computing",
            embeddedSoftware: "Embedded Software",
            readMore: "Read More →",
            "aws-ec2": "AWS EC2 Getting Started: Launch Your First Cloud Server",
            "aws-s3": "AWS S3 Getting Started: Complete Guide to Cloud Storage",
            "openmv-electric-contest": "2020 Electronic Design Contest Summary - OpenMV Vision Solution",
            "pn532-nfc-tutorial": "PN532 NFC Tutorial: Copy Encrypted Cards to Smart Bracelets",
            "aws-ec2-desc": "This article will take you through the core concepts of Amazon EC2, learn how to configure security groups, select instance types, and deploy your first cloud server.",
            "aws-s3-desc": "Deep dive into AWS S3 bucket configuration, permissions management, versioning, and security best practices to build reliable object storage solutions.",
            "openmv-desc": "Summary of the 2020 Electronic Design Contest Topic F - Contactless Temperature Measurement and Identity Recognition, using OpenMV H7 Plus for face recognition and mask detection.",
            "pn532-desc": "Detailed guide on using PN532 module and UID cards to simulate encrypted campus access cards on smart bracelets."
        },
        ja: {
            pageTitle: "テックブログ",
            pageDesc: "クラウドネイティブ、組込みシステム、分散システムについて",
            cloudComputing: "クラウドコンピューティング",
            embeddedSoftware: "組込みソフトウェア",
            readMore: "続きを読む →",
            "aws-ec2": "AWS EC2 入門ガイド：クラウドで最初のサーバーを起動する方法",
            "aws-s3": "AWS S3 入門ガイド：クラウドストレージ完全攻略",
            "openmv-electric-contest": "2020年電子設計コンテストまとめ - OpenMVビジョンソリューション",
            "pn532-nfc-tutorial": "PN532 NFCチュートリアル：暗号化カードをスマートバンドにコピー",
            "aws-ec2-desc": "Amazon EC2のコアコンセプト、セキュリティグループの構成、インスタンスタイプの選択を学び、最初のクラウドサーバーをデプロイします。",
            "aws-s3-desc": "AWS S3のバケット設定、権限管理、バージョン管理、セキュリティベストプラクティスを学び、信頼性の高いオブジェクトストレージを構築します。",
            "openmv-desc": "2020年電子設計コンテストF題のまとめ。OpenMV H7 Plusを使用して顔認識、マスク検出などを実装。",
            "pn532-desc": "PN532モジュールとUIDカードを使用して暗号化キャンパスアクセスカードをスマートバンドにシミュレーションする方法。"
        }
    },

    // AWS EC2 Tutorial
    "aws-ec2": {
        zh: {
            title: "AWS EC2 入门指南：如何在云端启动你的第一台服务器",
            category: "AWS",
            date: "2026-03-10",
            content: `<p>Amazon Elastic Compute Cloud (EC2) 是 AWS 最核心的服务之一，它允许用户在云端快速启动和管理虚拟服务器。本文将带你深入了解 EC2 的核心概念，并完成你的第一台云服务器部署。</p>
<h2>什么是 EC2？</h2>
<p>EC2 是 AWS 提供的可扩展计算服务，它提供了多种类型的虚拟服务器（实例），用户可以根据需求选择不同的计算、内存和存储配置。EC2 的主要特点包括：</p>
<ul>
<li><strong>弹性伸缩</strong>：根据需求随时增加或减少实例数量</li>
<li><strong>多种实例类型</strong>：通用、计算优化、内存优化、存储优化等</li>
<li><strong>按需付费</strong>：只为实际使用的计算资源付费</li>
<li><strong>安全可靠</strong>：结合 VPC、安全组实现网络隔离</li>
</ul>
<h2>核心概念</h2>
<h3>1. 实例类型 (Instance Types)</h3>
<p>AWS 提供多种实例类型，满足不同应用场景：</p>
<ul>
<li><strong>通用型 (t3, m5)</strong>：适合 Web 服务器、开发环境</li>
<li><strong>计算优化型 (c5, c6i)</strong>：适合高性能计算批处理</li>
<li><strong>内存优化型 (r5, x1e)</strong>：适合大型数据库、内存缓存</li>
<li><strong>存储优化型 (i3, d2)</strong>：适合数据仓库、文件系统</li>
</ul>
<h3>2. 安全组 (Security Groups)</h3>
<p>安全组是 EC2 的虚拟防火墙，控制进出实例的流量。</p>
<h3>3. 密钥对 (Key Pairs)</h3>
<p>SSH 密钥对用于安全登录 EC2 实例。</p>
<h2>实战：启动你的第一台 EC2 实例</h2>
<h3>步骤 1：登录 AWS 控制台</h3>
<p>访问 aws.amazon.com，登录后进入 EC2 控制台。</p>
<h3>步骤 2：启动实例</h3>
<ol>
<li>点击 "Launch Instance" 按钮</li>
<li>为实例命名</li>
<li>选择操作系统镜像</li>
<li>选择实例类型</li>
<li>创建或选择密钥对</li>
<li>配置安全组</li>
</ol>
<h3>步骤 3：连接实例</h3>
<pre><code>chmod 400 your-key.pem
ssh -i your-key.pem ec2-user@your-instance-public-ip</code></pre>
<h2>最佳实践</h2>
<ul>
<li>始终使用密钥对登录</li>
<li>安全组规则遵循最小权限原则</li>
<li>定期备份重要数据</li>
</ul>
<h2>总结</h2>
<p>EC2 是 AWS 云服务的基石，掌握 EC2 的使用方法对于云端开发至关重要。</p>`,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "AWS EC2 Getting Started: Launch Your First Cloud Server",
            category: "AWS",
            date: "2026-03-10",
            content: `<p>Amazon Elastic Compute Cloud (EC2) is one of AWS's core services, allowing users to quickly launch and manage virtual servers in the cloud. This article will take you through the core concepts of EC2 and help you deploy your first cloud server.</p>
<h2>What is EC2?</h2>
<p>EC2 is AWS's scalable computing service that provides various types of virtual servers (instances). Key features:</p>
<ul>
<li><strong>Elastic Scalability</strong>: Scale instance count up or down as needed</li>
<li><strong>Multiple Instance Types</strong>: General purpose, compute optimized, memory optimized, storage optimized</li>
<li><strong>Pay-as-you-go</strong>: Only pay for compute resources you actually use</li>
<li><strong>Secure & Reliable</strong>: Network isolation via VPC and security groups</li>
</ul>
<h2>Core Concepts</h2>
<h3>1. Instance Types</h3>
<p>AWS offers various instance types: General Purpose (t3, m5), Compute Optimized (c5, c6i), Memory Optimized (r5, x1e), Storage Optimized (i3, d2).</p>
<h3>2. Security Groups</h3>
<p>Security groups are virtual firewalls for EC2 that control inbound and outbound traffic.</p>
<h3>3. Key Pairs</h3>
<p>SSH key pairs are used for secure login to EC2 instances.</p>
<h2>Hands-on: Launch Your First EC2 Instance</h2>
<h3>Step 1: Login to AWS Console</h3>
<p>Visit aws.amazon.com, log in, and navigate to the EC2 console.</p>
<h3>Step 2: Launch Instance</h3>
<ol>
<li>Click "Launch Instance"</li>
<li>Name your instance</li>
<li>Choose an OS image</li>
<li>Select instance type</li>
<li>Create or select a key pair</li>
<li>Configure security group</li>
</ol>
<h3>Step 3: Connect to Instance</h3>
<pre><code>chmod 400 your-key.pem
ssh -i your-key.pem ec2-user@your-instance-public-ip</code></pre>
<h2>Best Practices</h2>
<ul>
<li>Always use key pairs for login</li>
<li>Follow principle of least privilege</li>
<li>Regularly back up important data</li>
</ul>
<h2>Summary</h2>
<p>EC2 is the foundation of AWS cloud services. Mastering EC2 is essential for cloud development.</p>`,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "AWS EC2 入門ガイド：クラウドで最初のサーバーを起動する方法",
            category: "AWS",
            date: "2026-03-10",
            content: `<p>Amazon Elastic Compute Cloud (EC2) はAWSの中核サービスの一つで、クラウド上で仮想サーバーを素早く起動・管理できます。</p>
<h2>EC2とは？</h2>
<p>EC2はAWSが提供するスケーラブルなコンピューティングサービス。主な特徴：</p>
<ul>
<li><strong>柔軟なスケーリング</strong>：必要に応じてインスタンス数を増減</li>
<li><strong>多様なインスタンスタイプ</strong>：汎用、コンピューティング最適化、メモリ最適化、ストレージ最適化</li>
<li><strong>従量制料金</strong>：使用したリソースのみ料金発生</li>
<li><strong>安全で信頼性が高い</strong>：VPC、セキュリティグループでネットワーク分離</li>
</ul>
<h2>コアコンセプト</h2>
<h3>1. インスタンスタイプ</h3>
<p>AWSは多様なインスタンスタイプを提供：汎用(t3, m5)、コンピューティング最適化(c5, c6i)、メモリ最適化(r5, x1e)、ストレージ最適化(i3, d2)。</p>
<h3>2. セキュリティグループ</h3>
<p>セキュリティグループはEC2の仮想ファイアウォール。</p>
<h3>3. キーペア</h3>
<p>SSHキーペアはEC2インスタンスへの安全なログインに使用。</p>
<h2>実践：最初のEC2インスタンスを起動</h2>
<h3>ステップ1：AWSコンソールにログイン</h3>
<p>aws.amazon.comにアクセスし、ログイン後EC2コンソールに移動。</p>
<h3>ステップ2：インスタンスを起動</h3>
<ol>
<li>「Launch Instance」をクリック</li>
<li>インスタンスに名前を付ける</li>
<li>OSイメージを選択</li>
<li>インスタンスタイプを選択</li>
<li>キーペアを作成または選択</li>
<li>セキュリティグループを設定</li>
</ol>
<h3>ステップ3：インスタンスに接続</h3>
<pre><code>chmod 400 your-key.pem
ssh -i your-key.pem ec2-user@パブリックIP</code></pre>
<h2>ベストプラクティス</h2>
<ul>
<li>必ずキーペアでログイン</li>
<li>最小権限の原則に従う</li>
<li>重要なデータは定期的にバックアップ</li>
</ul>
<h2>まとめ</h2>
<p>EC2はAWSクラウドサービスの基盤。</p>`,
            backLink: "← ブログに戻る"
        }
    },

    // AWS S3 Tutorial
    "aws-s3": {
        zh: {
            title: "AWS S3 入门指南：云存储完全掌握",
            category: "AWS",
            date: "2026-03-08",
            content: `<p>Amazon Simple Storage Service (S3) 是 AWS 最受欢迎的对象存储服务之一，以其高可用性、低成本和强大的功能而闻名。</p>
<h2>什么是 S3？</h2>
<p>S3 是一种对象存储服务，专为从 Web 应用程序大规模存储和检索任意数量的数据而设计。核心特性：</p>
<ul>
<li><strong>无限容量</strong>：存储空间无上限，按使用量付费</li>
<li><strong>高可用性</strong>：设计可用性为 99.99%</li>
<li><strong>持久性</strong>：设计持久性为 99.999999999%</li>
<li><strong>版本控制</strong>：支持对象版本管理</li>
<li><strong>生命周期策略</strong>：自动将对象转换到更便宜的存储层</li>
</ul>
<h2>核心概念</h2>
<h3>1. 存储桶 (Bucket)</h3>
<p>存储桶是 S3 中用于存储对象的容器。</p>
<h3>2. 对象 (Object)</h3>
<p>对象是存储在 S3 中的基本实体。</p>
<h3>3. 存储类 (Storage Classes)</h3>
<p>S3 提供多种存储类：S3 Standard、S3 Intelligent-Tiering、S3 Standard-IA、S3 Glacier。</p>
<h2>实战：创建和使用 S3 存储桶</h2>
<h3>步骤 1：创建存储桶</h3>
<ol>
<li>登录 AWS 控制台，进入 S3 服务</li>
<li>点击 "Create bucket"</li>
<li>输入存储桶名称</li>
<li>选择区域</li>
</ol>
<h3>步骤 2：上传对象</h3>
<pre><code>aws s3 cp myfile.txt s3://my-bucket-name/</code></pre>
<h3>步骤 3：设置访问权限</h3>
<p>S3 提供 IAM 策略、存储桶策略、ACL 等访问控制方式。</p>
<h2>安全最佳实践</h2>
<ul>
<li>默认情况下，存储桶应设为私有</li>
<li>启用版本控制防止数据丢失</li>
<li>使用加密保护静态数据</li>
</ul>
<h2>总结</h2>
<p>AWS S3 是云原生应用的重要基础设施。</p>`,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "AWS S3 Getting Started: Complete Guide to Cloud Storage",
            category: "AWS",
            date: "2026-03-08",
            content: `<p>Amazon Simple Storage Service (S3) is one of AWS's most popular object storage services.</p>
<h2>What is S3?</h2>
<p>S3 is an object storage service designed for storing and retrieving any amount of data at scale. Core features:</p>
<ul>
<li><strong>Unlimited Capacity</strong>: No storage limit, pay for what you use</li>
<li><strong>High Availability</strong>: 99.99% designed availability</li>
<li><strong>Durability</strong>: 99.999999999% designed durability</li>
<li><strong>Versioning</strong>: Object version management</li>
<li><strong>Lifecycle Policies</strong>: Auto transition to cheaper storage</li>
</ul>
<h2>Core Concepts</h2>
<h3>1. Buckets</h3>
<p>Buckets are containers for storing objects in S3.</p>
<h3>2. Objects</h3>
<p>Objects are the fundamental entities stored in S3.</p>
<h3>3. Storage Classes</h3>
<p>S3 offers: S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, S3 Glacier.</p>
<h2>Hands-on: Create and Use S3 Buckets</h2>
<h3>Step 1: Create a Bucket</h3>
<ol>
<li>Log in to AWS Console, navigate to S3</li>
<li>Click "Create bucket"</li>
<li>Enter bucket name</li>
<li>Select region</li>
</ol>
<h3>Step 2: Upload Objects</h3>
<pre><code>aws s3 cp myfile.txt s3://my-bucket-name/</code></pre>
<h3>Step 3: Set Access Permissions</h3>
<p>S3 provides IAM Policies, Bucket Policies, and ACLs.</p>
<h2>Security Best Practices</h2>
<ul>
<li>Buckets should be private by default</li>
<li>Enable versioning</li>
<li>Use encryption</li>
</ul>
<h2>Summary</h2>
<p>AWS S3 is critical for cloud-native applications.</p>`,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "AWS S3 入門ガイド：クラウドストレージ完全攻略",
            category: "AWS",
            date: "2026-03-08",
            content: `<p>Amazon Simple Storage Service (S3) はAWSで最も人気のオブジェクトストレージサービス。</p>
<h2>S3とは？</h2>
<p>S3は、Webアプリケーションから大規模にデータを保存・取得するためのオブジェクトストレージサービス。コア機能：</p>
<ul>
<li><strong>無制限の容量</strong>：保存容量に上限なし</li>
<li><strong>高い可用性</strong>：99.99%の可用性</li>
<li><strong>耐久性</strong>：99.999999999%の耐久性</li>
<li><strong>バージョン管理</strong>：オブジェクトのバージョン管理</li>
<li><strong>ライフサイクルポリシー</strong>：自動的に安いストレージ階層に移行</li>
</ul>
<h2>コアコンセプト</h2>
<h3>1. バケット</h3>
<p>バケットはS3でオブジェクトを保存するコンテナ。</p>
<h3>2. オブジェクト</h3>
<p>オブジェクトはS3に保存される基本的なエンティティ。</p>
<h3>3. ストレージクラス</h3>
<p>S3はS3 Standard、S3 Intelligent-Tiering、S3 Standard-IA、S3 Glacierを提供。</p>
<h2>実践：S3バケットの作成と使用</h2>
<h3>ステップ1：バケットを作成</h3>
<ol>
<li>AWSコンソールにログイン、S3に移動</li>
<li>「Create bucket」をクリック</li>
<li>バケット名を入力</li>
<li>リージョンを選択</li>
</ol>
<h3>ステップ2：オブジェクトをアップロード</h3>
<pre><code>aws s3 cp myfile.txt s3://my-bucket-name/</code></pre>
<h3>ステップ3：アクセス権限を設定</h3>
<p>S3はIAMポリシー、バケットポリシー、ACLを提供。</p>
<h2>セキュリティベストプラクティス</h2>
<ul>
<li>バケットはデフォルトで私有</li>
<li>バージョン管理を有効に</li>
<li>暗号化を使用</li>
</ul>
<h2>まとめ</h2>
<p>AWS S3はクラウドネイティブアプリケーションに不可欠。</p>`,
            backLink: "← ブログに戻る"
        }
    },

    // OpenMV Electric Contest
    "openmv-electric-contest": {
        zh: {
            title: "2020 电赛 F 题总结回顾 — OpenMV 实现视觉方案",
            category: "嵌入式软件",
            date: "2020-09",
            content: `<p>我决定把资源倒腾倒腾发上来，一方面分享大致思路，另一方面也当是纪念了。做的是 2020 电赛 F 题：<strong>简易无接触温度测量与身份识别装置</strong></p>
<h2>整体设计</h2>
<h3>硬件选择</h3>
<p>机器视觉模块使用 OpenMV，我们买的是最顶配型号 OpenMV H7 Plus，最终顺利完成了题目要求的所有任务。</p>
<p>温度测量方面是 MLX90614 使用 I2C 读取温度。</p>
<p>主控使用 STM32C8T6。</p>
<h3>软件流程</h3>
<p>STM32 和 OpenMV 通过串口通信，我们指定一个字母对应进入一个模式。</p>
<h2>视觉算法</h2>
<h3>分辨不同人脸（身份识别）</h3>
<p><strong>我的方法是：</strong>先加一层人脸识别，将人脸部分局部放大截取出来再拿去提取特征点并进行特征点比对。</p>
<h3>口罩识别</h3>
<p>两种方法：Haar 算子或使用内置 TFLite 神经网络框架。</p>
<h3>现场学习</h3>
<p>使用特征点，现场学习就是拍照、提取特征点、保存文件，20 张够够的了。</p>
<h2>总结</h2>
<p>我们最终获得了福建省二等奖。视觉部分都是满分。</p>`,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "2020 Electronic Design Contest Summary - OpenMV Vision Solution",
            category: "Embedded Software",
            date: "2020-09",
            content: `<p>I've decided to share my resources and experience from the 2020 Electronic Design Contest. The topic was: <strong>Simple Contactless Temperature Measurement and Identity Recognition Device</strong></p>
<h2>Overall Design</h2>
<h3>Hardware Selection</h3>
<p>We used OpenMV for machine vision. We used the top-tier OpenMV H7 Plus.</p>
<p>For temperature measurement, we used MLX90614 via I2C.</p>
<p>The main controller was STM32C8T6.</p>
<h3>Software Flow</h3>
<p>STM32 and OpenMV communicate via serial. We assigned letters to different modes.</p>
<h2>Vision Algorithms</h2>
<h3>Face Recognition</h3>
<p><strong>My approach:</strong> First use face detection to locate and crop the face region, then perform feature point extraction and matching.</p>
<h3>Mask Detection</h3>
<p>Two approaches: Haar cascade or built-in TFLite neural network.</p>
<h3>On-site Learning</h3>
<p>Using feature points, 20 photos was sufficient.</p>
<h2>Summary</h2>
<p>We got the Second Prize in Fujian Province. Vision parts scored full marks.</p>`,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "2020年電子設計コンテストまとめ - OpenMVビジョンソリューション",
            category: "組込みソフトウェア",
            date: "2020-09",
            content: `<p>2020年電子設計コンテストの経験を共有します。テーマは「非接触温度測定と身分識別装置」。</p>
<h2>全体設計</h2>
<h3>ハードウェア選択</h3>
<p>機械学習用ビジュアルモジュールにはOpenMVを使用。最上位モデルのOpenMV H7 Plusを使用しました。</p>
<p>温度測定にはMLX90614を使用。</p>
<p>メインコントローラーにはSTM32C8T6を使用。</p>
<h3>ソフトウェアフロー</h3>
<p>STM32とOpenMVはシリアル通信。</p>
<h2>ビジョンアルゴリズム</h2>
<h3>顔認識</h3>
<p><strong>私の方法：</strong>まず顔検出で顔を検出し、特徴点抽出とマッチング。</p>
<h3>マスク検出</h3>
<p>2つのアプローチ：Haarカスケードまたは組み込みTFLite。</p>
<h3>オンスタイル学習</h3>
<p>20枚の写真で十分でした。</p>
<h2>まとめ</h2>
<p>福建省2等奖を獲得。</p>`,
            backLink: "← ブログに戻る"
        }
    },

    // PN532 NFC Tutorial
    "pn532-nfc-tutorial": {
        zh: {
            title: "使用 PN532 将全加密卡复制到手环上 — NFC 校园门禁卡模拟教程",
            category: "嵌入式软件",
            date: "2021-03",
            content: `<blockquote><p><strong>注意！</strong>本教程仅供个人学习，请勿修改数据金额，由此带来的任何非法后果均由个人承担。</p></blockquote>
<p>模拟加密卡想法由来已久，现将完整教程分享出来。</p>
<h2>材料准备</h2>
<p><strong>硬件：</strong>PN532、USB转串口、4根杜邦线、UID卡、智能手环</p>
<p><strong>软件：</strong>MifareOneTool、蛐蛐(Proxmark3)</p>
<h2>模拟原理</h2>
<ul>
<li>手环不能直接模拟加密卡</li>
<li>需要制作一张只有扇区0的空白UID卡</li>
<li>使用UID卡的后门特殊指令修改UID</li>
<li>最后将原加密卡信息写入手环</li>
</ul>
<h2>模拟教程</h2>
<h3>Step 0：环境准备</h3>
<p>使用4根杜邦线连接USB转串口与PN532。</p>
<h3>Step 1：破解加密卡</h3>
<p>使用蛐蛐进行全加密卡破解，耐心等待30-60分钟。</p>
<h3>Step 2：制作空白卡</h3>
<p>将原卡扇区0信息复制到新文件，写入UID卡。</p>
<h3>Step 3：模拟</h3>
<p>手机连接手环，模拟UID卡。</p>
<h3>Step 4：写数据到手环</h3>
<p>使用蛐蛐将原卡数据写入手环。</p>
<h2>其他方法</h2>
<ul>
<li>STM32/Arduino + RC522</li>
<li>小米手机直接模拟</li>
</ul>`,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "PN532 NFC Tutorial: Copy Encrypted Cards to Smart Bracelets",
            category: "Embedded Software",
            date: "2021-03",
            content: `<blockquote><p><strong>Warning!</strong> This tutorial is for educational purposes only.</p></blockquote>
<p>I've wanted to simulate encrypted cards for a long time. Here's a complete guide.</p>
<h2>Materials Needed</h2>
<p><strong>Hardware:</strong> PN532, USB to Serial, 4 Dupont wires, UID Card, Smart bracelet</p>
<p><strong>Software:</strong> MifareOneTool, Proxmark3</p>
<h2>How It Works</h2>
<ul>
<li>Smart bracelets can't directly simulate encrypted cards</li>
<li>Need to create a blank UID card with only Sector 0</li>
<li>Use UID card's backdoor commands to modify UID</li>
<li>Write original card data to bracelet</li>
</ul>
<h2>Tutorial</h2>
<h3>Step 0: Environment Setup</h3>
<p>Connect USB to Serial with PN532 using 4 Dupont wires.</p>
<h3>Step 1: Crack Encrypted Card</h3>
<p>Use Proxmark3 for cracking, wait 30-60 minutes.</p>
<h3>Step 2: Create Blank Card</h3>
<p>Copy Sector 0 info to new file, write to UID card.</p>
<h3>Step 3: Simulate</h3>
<p>Connect bracelet to phone, simulate UID card.</p>
<h3>Step 4: Write Data to Bracelet</h3>
<p>Use Proxmark3 to write original card data to bracelet.</p>
<h2>Other Methods</h2>
<ul>
<li>STM32/Arduino + RC522</li>
<li>Xiaomi Phone Direct Simulation</li>
</ul>`,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "PN532 NFCチュートリアル：暗号化カードをスマートバンドにコピー",
            category: "組込みソフトウェア",
            date: "2021-03",
            content: `<blockquote><p><strong>注意！</strong>このチュートリアルは教育目的のみです。</p></blockquote>
<p>暗号化カードのシミュレーション完全なガイド。</p>
<h2>必要な材料</h2>
<p><strong>ハードウェア：</strong>PN532、USBシリアル、4本デュポン線、UIDカード、スマートバンド</p>
<p><strong>ソフトウェア：</strong>MifareOneTool、Proxmark3</p>
<h2>原理</h2>
<ul>
<li>スマートバンドは暗号化カードを直接シミュレーションできない</li>
<li>セクター0のみの空白UIDカードを作成する必要がある</li>
<li>UIDカードの後門コマンドを使用</li>
<li>元のカードデータをバンドに書く</li>
</ul>
<h2>チュートリアル</h2>
<h3>ステップ0：環境設定</h3>
<p>USBシリアルをPN532に接続。</p>
<h3>ステップ1：暗号化カードを解読</h3>
<p>Proxmark3で解読、30-60分待つ。</p>
<h3>ステップ2：空白カードを作成</h3>
<p>セクター0情報を新しいファイルにコピー、UIDカードに書く。</p>
<h3>ステップ3：シミュレーション</h3>
<p>スマホをバンドに接続、UIDカードをシミュレーション。</p>
<h3>ステップ4：バンドにデータを書く</h3>
<p>Proxmark3で元のカードデータをバンドに書く。</p>
<h2>他の方法</h2>
<ul>
<li>STM32/Arduino + RC522</li>
<li>小米スマホ直接シミュレーション</li>
</ul>`,
            backLink: "← ブログに戻る"
        }
    }
};

// Function to get blog translation by slug
function getBlogTranslation(slug, lang) {
    if (blogTranslations[slug] && blogTranslations[slug][lang]) {
        return blogTranslations[slug][lang];
    }
    return null;
}

// Function to update blog page content
function updateBlogContent(slug, lang) {
    const trans = getBlogTranslation(slug, lang);
    if (!trans) return false;

    // Update title
    const titleEl = document.querySelector('.blog-post header h1');
    if (titleEl) titleEl.textContent = trans.title;

    // Update category
    const categoryEl = document.querySelector('.blog-post header .post-category');
    if (categoryEl) categoryEl.textContent = trans.category;

    // Update date
    const dateEl = document.querySelector('.blog-post header .post-meta span:first-child');
    if (dateEl) dateEl.textContent = '📅 ' + trans.date;

    // Update content
    const contentEl = document.querySelector('.blog-post .post-content, .blog-post .blog-content');
    if (contentEl) contentEl.innerHTML = trans.content;

    // Update back link
    const backLink = document.querySelector('.blog-post .back-link');
    if (backLink && trans.backLink) {
        backLink.textContent = trans.backLink;
    }

    // Update page title
    document.title = trans.title + ' | Junzhe Lin';

    return true;
}

// Function to update blog index page
function updateBlogIndex(lang) {
    const trans = blogTranslations["blog-index"][lang];
    if (!trans) return;

    // Update page title and description
    const titleEl = document.querySelector('.page-title');
    if (titleEl) titleEl.textContent = trans.pageTitle;

    const descEl = document.querySelector('.page-desc');
    if (descEl) descEl.textContent = trans.pageDesc;

    // Update category titles
    const categoryTitles = document.querySelectorAll('.category-title');
    if (categoryTitles[0]) categoryTitles[0].innerHTML = `<span class="category-icon">☁️</span> ${trans.cloudComputing}`;
    if (categoryTitles[1]) categoryTitles[1].innerHTML = `<span class="category-icon">🔧</span> ${trans.embeddedSoftware}`;

    // Update blog post titles and descriptions
    const postItems = document.querySelectorAll('.post-item[data-post-slug]');

    postItems.forEach((item) => {
        const slug = item.dataset.postSlug;
        const titleLink = item.querySelector('h3 a');
        const desc = item.querySelector('p');

        if (titleLink && trans[slug]) {
            titleLink.textContent = trans[slug];
        }
        if (desc && trans[slug + '-desc']) {
            desc.textContent = trans[slug + '-desc'];
        }
    });
}

// Language translations
const translations = {
    zh: {
        nav: {
            home: '首页',
            blog: '技术博客',
            about: '关于我'
        },
        home: {
            welcome: '欢迎来到我的技术博客',
            subtitle: '分享云原生与分布式系统的学习心得',
            recentPosts: '最近文章',
            categories: '分类浏览',
            cloudComputing: '云计算',
            cloudDesc: 'AWS, 云架构设计',
            aboutMe: '关于我',
            aboutDesc: '个人简介、经历'
        },
        about: {
            education: '教育背景',
            research: '研究方向',
            skills: '技术技能',
            publications: ' publications',
            awards: '荣誉奖项',
            contact: '联系方式',
            master: '理学硕士',
            bachelor: '理学学士',
            hku: '香港大学',
            szu: '深圳大学',
            present: '至今',
            programming: '编程',
            cloudDevOps: '云与 DevOps',
            tools: '工具',
            email: '邮箱',
            github: 'GitHub'
        },
        blog: {
            readMore: '阅读全文 →',
            backToHome: '← 返回首页'
        }
    },
    en: {
        nav: {
            home: 'Home',
            blog: 'Blog',
            about: 'About'
        },
        home: {
            welcome: 'Welcome to My Tech Blog',
            subtitle: 'Sharing insights on Cloud Native & Distributed Systems',
            recentPosts: 'Recent Articles',
            categories: 'Browse by Category',
            cloudComputing: 'Cloud Computing',
            cloudDesc: 'AWS, Cloud Architecture',
            aboutMe: 'About Me',
            aboutDesc: 'Profile, Experience'
        },
        about: {
            education: 'Education',
            research: 'Research Interests',
            skills: 'Technical Skills',
            publications: 'Publications',
            awards: 'Awards & Honors',
            contact: 'Contact',
            master: 'M.Sc.',
            bachelor: 'B.Sc.',
            hku: 'The University of Hong Kong',
            szu: 'Shenzhen University',
            present: 'Present',
            programming: 'Programming',
            cloudDevOps: 'Cloud & DevOps',
            tools: 'Tools',
            email: 'Email',
            github: 'GitHub'
        },
        blog: {
            readMore: 'Read More →',
            backToHome: '← Back to Home'
        }
    },
    ja: {
        nav: {
            home: 'ホーム',
            blog: 'ブログ',
            about: '概要'
        },
        home: {
            welcome: 'テックブログへようこそ',
            subtitle: 'クラウドネイティブと分散システムについて',
            recentPosts: '最新記事',
            categories: 'カテゴリー',
            cloudComputing: 'クラウドコンピューティング',
            cloudDesc: 'AWS、クラウドアーキテクチャ',
            aboutMe: '私について',
            aboutDesc: 'プロフィール、経歴'
        },
        about: {
            education: '学歴',
            research: '研究分野',
            skills: '技術スキル',
            publications: '論文',
            awards: '受賞歴',
            contact: '連絡先',
            master: '修士',
            bachelor: '学士',
            hku: '香港大学',
            szu: '深セン大学',
            present: '現在',
            programming: 'プログラミング',
            cloudDevOps: 'クラウドとDevOps',
            tools: 'ツール',
            email: 'メール',
            github: 'GitHub'
        },
        blog: {
            readMore: '続きを読む →',
            backToHome: '← ホームに戻る'
        }
    }
};

// Current language
let currentLang = 'zh';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    const savedLang = localStorage.getItem('lang') || 'zh';
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    setLanguage(savedLang);
    setTheme(savedTheme);
    
    // Set up event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Language dropdown toggle
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });
    
    // Language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update body class
    document.body.className = `lang-${lang}`;
    
    // Update dropdown button text
    const langLabels = { zh: '中文', en: 'EN', ja: '日本語' };
    document.querySelector('.lang-btn span').textContent = langLabels[lang];
    
    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    
    // Update navigation
    const t = translations[lang].nav;
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks[0]) navLinks[0].textContent = t.home;
    if (navLinks[1]) navLinks[1].textContent = t.blog;
    if (navLinks[2]) navLinks[2].textContent = t.about;
    
    // Update page content
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const t = translations[lang];
    const page = document.body.dataset.page;
    
    if (page === 'home') {
        // Update home page
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero p');
        const sectionTitles = document.querySelectorAll('.section-title');
        
        if (heroTitle) heroTitle.textContent = t.home.welcome;
        if (heroSubtitle) heroSubtitle.textContent = t.home.subtitle;
        
        if (sectionTitles[0]) sectionTitles[0].textContent = t.home.recentPosts;
        if (sectionTitles[1]) sectionTitles[1].textContent = t.home.categories;
        
        // Update category cards
        const categoryCards = document.querySelectorAll('.category-card h3');
        const categoryDescs = document.querySelectorAll('.category-card p');
        
        if (categoryCards[0]) categoryCards[0].textContent = t.home.cloudComputing;
        if (categoryDescs[0]) categoryDescs[0].textContent = t.home.cloudDesc;
        if (categoryCards[1]) categoryCards[1].textContent = t.home.aboutMe;
        if (categoryDescs[1]) categoryDescs[1].textContent = t.home.aboutDesc;
    }
    
    if (page === 'about') {
        // Update about page
        const contentBlocks = document.querySelectorAll('.content-block h2');
        
        if (contentBlocks[0]) contentBlocks[0].textContent = t.about.education;
        if (contentBlocks[1]) contentBlocks[1].textContent = t.about.research;
        if (contentBlocks[2]) contentBlocks[2].textContent = t.about.skills;
        if (contentBlocks[3]) contentBlocks[3].textContent = t.about.publications;
        if (contentBlocks[4]) contentBlocks[4].textContent = t.about.awards;
        if (contentBlocks[5]) contentBlocks[5].textContent = t.about.contact;
        
        // Update contact labels
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            const labels = contactInfo.querySelectorAll('strong');
            if (labels[0]) labels[0].textContent = t.about.email + ':';
            if (labels[1]) labels[1].textContent = t.about.github + ':';
        }
    }
    
    // Handle blog index page
    if (page === 'blog' && typeof updateBlogIndex === 'function') {
        updateBlogIndex(lang);
    }
    
    // Handle individual blog posts
    if (page === 'blog-post') {
        // Get blog slug from URL or body data attribute
        const blogSlug = document.body.dataset.blogSlug;
        if (blogSlug && typeof updateBlogContent === 'function') {
            updateBlogContent(blogSlug, lang);
        }
    }
}

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}
