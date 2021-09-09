①課題内容（どんな作品か）
筋トレで鍛えた部位とエアロバイクを漕いだ時間を記録するアプリ
「鍛えた人（キン肉マンのキャラ）」「鍛えた部位」「有酸素運動（エアロバイク）の時間」をセットで記録できます。
また、エアロバイクを漕いだ時間をキャラクターごと棒グラフで表示します。


②工夫した点・こだわった点
・キャラと部位、そしてエアロバイクの時間をセットでテーブルに追加していけるところ

・キャラクターごとのエアロバイクを漕いだ時間が視覚的にわかるように、ページ下部に棒グラフを設置した点


③質問・疑問（あれば）
・エアロバイクを漕いだ時間の累計をキャラクターごとに棒グラフで表示しようとしたのですが、どうしても合計値が取得できず、現状は直近（テーブルは下に追加する仕様）のエアロバイクを漕いだ時間を表示する仕組みになっています。
Firebaseに保存していることでうまく取得できないのか、そもそもコードの書き方に問題があるのか、しっくりくるサイトに出会えませんでした。

・今回、あまりこだわることができなかったのですが、グラフ実装に関してchart.js以外におすすめがあれば教えていただきたいです。残念ながら実装できていないのですが、部位ごとに筋トレしている頻度が高いキャラクターを割合がわかるように円グラフに表示する等も試して見たかったのですが、時間切れで力尽きてしまいました。

・consoleに以下のエラーが表示されてしまい、どうやっても消えないのですが、
調べてもよくわかりませんでした。
It looks like you're using the development build of the Firebase JS SDK.
When deploying Firebase apps to production, it is advisable to only import
the individual SDK components you intend to use.

For the CDN builds, these are available in the following manner
(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):

是非ご教示いただけますと幸甚です。

