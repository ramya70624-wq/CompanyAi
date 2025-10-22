document.addEventListener('DOMContentLoaded', function(){console.log('تم تحميل الصفحة بنجاح!');});
document.getElementById('appForm')?.addEventListener('submit',function(e){e.preventDefault();
const appName=document.getElementById('appName').value.trim();
const companyName=document.getElementById('companyName').value.trim();
const appUrl=document.getElementById('appUrl').value.trim();
const free=document.querySelector('input[name="free"]:checked');
const usageField=document.getElementById('usageField').value;
const description=document.getElementById('description').value.trim();
if(!appName.match(/^[A-Za-z]+$/) || !companyName.match(/^[A-Za-z]+$/) || !appUrl || !free || !usageField || !description){alert('الرجاء إدخال جميع الحقول بشكل صحيح!');return;}
const appsTable=window.opener?.document.getElementById('appsTable')||document.getElementById('appsTable');
if(appsTable){const row=appsTable.insertRow(-1);row.innerHTML=`<td>${appName}<details><summary>انقر لرؤية التفاصيل</summary><p>رابط: ${appUrl}</p><p>مجال الاستخدام: ${usageField}</p><p>هل مجاني: ${free.value}</p><p>شرح: ${description}</p></details></td><td>${companyName}</td><td>${usageField}</td><td>${free.value}</td><td><input type="radio"></td>`;}
alert('تم إضافة التطبيق بنجاح!');this.reset();});