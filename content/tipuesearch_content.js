var tipuesearch = {"pages": [{'title': 'MDE', 'text': '廖璟程40823124 \n \n 副標題必須搭配中文 \n \n youtube github \n \n', 'tags': '', 'url': 'MDE.html'}, {'title': '課堂簡介', 'text': '紀錄每次課堂所學 \n', 'tags': '', 'url': '課堂簡介.html'}, {'title': '第一周', 'text': 'Cmsimde建立網站 \n 1.安裝隨身開發環境 full2020_cp.7z \n 2.安裝git套件 portableGit 放入data \n 3.修改start.bat內啟動路徑 \n \n 4.設定.gitconfig存放於home目錄    \n 5.建立github倉儲並clone至資料夾內 \n \n \n 6.將cmsimde架站器加入至cad2020目錄下 \n \n \n 7.將cmsimde中up_dir目錄下檔案全部移至cad2020目錄下 \n 8.安裝pip套件 :flask、flask_cors、lxml、bs4、pelican、markdown、leo   9.開啟wsgi.py 開始編輯近端網頁 \n \n', 'tags': '', 'url': '第一周.html'}, {'title': '第四周', 'text': '使用wlink \n nx介紹 \n \n', 'tags': '', 'url': '第四周.html'}, {'title': '第五周', 'text': 'What is API \n \n API是指應用程式介面，在網頁和程式中扮演介面和資料庫的橋樑，當點擊連結後將資料從資料庫中回傳至使用者介面中供使用者觀看。 \n', 'tags': '', 'url': '第五周.html'}, {'title': '第六周', 'text': '利用inventor內建API"iLogic"功能，使用基礎迴圈遞增多種尺寸以快速建立模型 \n \n 以c#編寫 \n //40823124編寫\n#include  \n#include  \n#include  \nint s=0;//形式 \nint i;\nint start = 1;\nint end;//遞增64次\nint L,W,H;//基礎長寬高 \nint l2,w2,h2;//增加值 \nint d3 = 0;\nint d12 =10;\nint main(void){\n\tprintf("輸入初始長度\\n");\n\t\tscanf("%d",&L);\n\tprintf("輸入初始寬度\\n");\n\t\tscanf("%d",&W);\n\tprintf("輸入初始高度\\n");\n\t\tscanf("%d",&H);\n\tprintf("輸入長度增值\\n");\n\t\tscanf("%d",&l2);\n\tprintf("輸入寬度增值\\n");\n\t\tscanf("%d",&w2);\n\tprintf("輸入高度增值\\n");\n\t\tscanf("%d",&h2);\n\tprintf("輸入遞增次數\\n");\n\t\tscanf("%d",&end);\n\t\tprintf("列印:\\n");\n  for(i=1;i <= end ;i++){ //使用迴圈遞增64次\n    L=L+l2;//每次增加\n    W=W+w2;//每次增加\n    H=H+h2;//每次增加\n    s=s+1;//每次增加\n    d3=d3+0;//不變\n    printf("If Style = %d Then \\n Leight = %d \\n Width = %d \\n Height = %d \\n d3 = %d \\n d11 = %d \\n volume = iProperties.Volume \\n Volume = volume \\n Parameter.UpdateAfterChange = True \\n End If \\n",s,L,W,H,d3,d12); //列印inventor可支援語言 \n  }\n  printf("點擊以結束\\n");\n  system("pause");\n  return 0;//返回\n  \n}\n \n', 'tags': '', 'url': '第六周.html'}, {'title': '第七周', 'text': '使用Visual Studio .NET (VB) \n 編寫API \n \n 簡易UI \n \n 連動Inventor參數實現數值繪圖 \n \n', 'tags': '', 'url': '第七周.html'}, {'title': '第十三周', 'text': "控制物體單一軸向移動 \n 物體和關節設置主從關係，將物體至於關節下，並將物體固定在關節上 \n \n 控制語言為Lua \n threadFunction=function()\n    while sim.getSimulationState()~=sim.simulation_advancing_abouttostop do\n        -- Read the keyboard messages (make sure the focus is on the main window, scene view):\n        message,auxiliaryData=sim.getSimulatorMessage()\n        while message~=-1 do\n            if (message==sim.message_keypress) then\n                if (auxiliaryData[1]==2010) then\n                    -- up key\n                    velocity=100\n                    torque=200\n                    hammer_back = 0\n                end\n                if (auxiliaryData[1]==2009) then\n                    -- down key\n                     velocity = -100\n                     torque=-200\n                     hammer_back = 1\n                end\n               \n            end\n            message,auxiliaryData=sim.getSimulatorMessage()\n        end\n \n        -- We take care of setting the desired hammer position:\n        if hammer_back == 1\n            --then sim.setObjectPosition(hammer,-1, position)\n           then sim.setJointPosition(joint, -1, orientation)\n        end\n        sim.setJointTargetVelocity(joint,velocity)\n \n        -- Since this script is threaded, don't waste time here:\n        sim.switchThread() -- Resume the script at next simulation loop start\n    end\nend\n-- Put some initialization code here:\n-- Retrieving of some handles and setting of some initial values:\njoint=sim.getObjectHandle('joint')\nhammer=sim.getObjectHandle('hammer')\nvelocity=0\nhammer_back=0\nposition=sim.getObjectPosition(hammer,-1)\n \n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n    sim.addStatusbarMessage('Lua runtime error: '..err)\nend\n \n-- Put some clean-up code here:\n \n", 'tags': '', 'url': '第十三周.html'}, {'title': '第十四周', 'text': "控制物體單軸向旋轉 \n 但目前只能朝一方向轉動一部分角度，待日後除錯 \n \n 程式以Lua撰寫 \n threadFunction=function()\n    while sim.getSimulationState()~=sim.simulation_advancing_abouttostop do\n        -- Read the keyboard messages (make sure the focus is on the main window, scene view):\n        message,auxiliaryData=sim.getSimulatorMessage()\n        while message~=-1 do\n            if (message==sim.message_keypress) then\n                if (auxiliaryData[1]==119) then\n                    -- up key\n                    velocity=100\n                    torque=200\n                    hammer_back = 0\n                end\n                if (auxiliaryData[1]==115) then\n                    -- down key\n                     hammer_back = 1\n                     torque=-200\n                     velocity = -100\n                end\n               \n            end\n            message,auxiliaryData=sim.getSimulatorMessage()\n        end\n \n        -- We take care of setting the desired hammer position:\n        if hammer_back == 1\n            then \n               sim.setJointPosition(joint, -1, orientation)\n               --sim.setObjectPosition(hammer,-1, position)\n        end\n        sim.setJointTargetPosition(joint, velocity)\n        --sim.setJointForce(joint,torque)\n        \n        -- Since this script is threaded, don't waste time here:\n        sim.switchThread() -- Resume the script at next simulation loop start\n    end\nend\n-- Put some initialization code here:\n-- Retrieving of some handles and setting of some initial values:\njoint=sim.getObjectHandle('joint1')\nhammer=sim.getObjectHandle('bat')\nvelocity=0\nhammer_back=0\ntorque=0\norientation=sim.getJointPosition(joint, -1)\nposition=sim.getObjectPosition(hammer,-1)\n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n    sim.addStatusbarMessage('Lua runtime error: '..err)\nend\n \n-- Put some clean-up code here:\n \n", 'tags': '', 'url': '第十四周.html'}, {'title': 'HomeWork', 'text': '每次課堂作業 \n', 'tags': '', 'url': 'HomeWork.html'}, {'title': '第1周', 'text': '體積試算表 \n \n \n \n', 'tags': '', 'url': '第1周.html'}, {'title': '第4周', 'text': 'NX更新心得 \n \n NX12更新後統一稱為NX，不是NX13  使用者UI有多種可更換  更加合適的解析度  取消 增強功能*  零組件可以設定密碼保護 \n', 'tags': '', 'url': '第4周.html'}, {'title': '程式', 'text': '', 'tags': '', 'url': '程式.html'}, {'title': 'inventor iLogic in Dart', 'text': '\n', 'tags': '', 'url': 'inventor iLogic in Dart.html'}, {'title': 'inventor in c#', 'text': '此種方法僅為土炮方法，並不實用 \n 以C#編寫 \n //40823124編寫\n#include  \n#include  \n#include  \nint s=0;//形式 \nint i;\nint start = 1;\nint end;//遞增64次\nint L,W,H;//基礎長寬高 \nint l2,w2,h2;//增加值 \nint d3 = 0;\nint d12 =10;\nint main(void){\n\tprintf("輸入初始長度\\n");\n\t\tscanf("%d",&L);\n\tprintf("輸入初始寬度\\n");\n\t\tscanf("%d",&W);\n\tprintf("輸入初始高度\\n");\n\t\tscanf("%d",&H);\n\tprintf("輸入長度增值\\n");\n\t\tscanf("%d",&l2);\n\tprintf("輸入寬度增值\\n");\n\t\tscanf("%d",&w2);\n\tprintf("輸入高度增值\\n");\n\t\tscanf("%d",&h2);\n\tprintf("輸入遞增次數\\n");\n\t\tscanf("%d",&end);\n\t\tprintf("列印:\\n");\n  for(i=1;i <= end ;i++){ //使用迴圈遞增64次\n    L=L+l2;//每次增加\n    W=W+w2;//每次增加\n    H=H+h2;//每次增加\n    s=s+1;//每次增加\n    d3=d3+0;//不變\n    printf("If Style = %d Then \\n Leight = %d \\n Width = %d \\n Height = %d \\n d3 = %d \\n d11 = %d \\n volume = iProperties.Volume \\n Volume = volume \\n Parameter.UpdateAfterChange = True \\n End If \\n",s,L,W,H,d3,d12); //列印inventor可支援語言 \n  }\n  printf("點擊以結束\\n");\n  system("pause");\n  return 0;//返回\n  \n}\n \n \n 執行 \n \n', 'tags': '', 'url': 'inventor in c#.html'}, {'title': '錯誤和除錯', 'text': '', 'tags': '', 'url': '錯誤和除錯.html'}, {'title': '旋轉測試error', 'text': '發覺棒子只能朝同方向旋轉一部分角度 \n \n 發現轉軸與棒子軸向不符合 \n 創建一方塊測試後可旋轉 \n', 'tags': '', 'url': '旋轉測試error.html'}]};