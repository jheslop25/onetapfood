<?php
// login endpoint

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instacart.ca/v3/dynamic_data/authenticate/login?source=mobile_web&cache_key=undefined');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"scope\":\"\",\"grant_type\":\"password\",\"signup_v3_endpoints_web\":null,\"email\":\"john@earthmountain.ca\",\"password\":\"iamgroot\",\"authenticity_token\":\"lG/Znzw7VOeAMzmpGzstm5fQ7KgJFPaOj4+f2fR7PuEvz96ljXdgq5RczBRfF0v5KldpYzD/1uoULfosWC7Lfg==\"}");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = 'Authority: www.instacart.ca';
$headers[] = 'X-Csrf-Token: undefined';
$headers[] = 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36';
$headers[] = 'Content-Type: application/json';
$headers[] = 'Accept: application/json';
$headers[] = 'X-Client-Identifier: mobile_web';
$headers[] = 'X-Requested-With: XMLHttpRequest';
$headers[] = 'Sec-Fetch-Dest: empty';
$headers[] = 'Origin: https://www.instacart.ca';
$headers[] = 'Sec-Fetch-Site: same-origin';
$headers[] = 'Sec-Fetch-Mode: cors';
$headers[] = 'Referer: https://www.instacart.ca/';
$headers[] = 'Accept-Language: en-US,en;q=0.9';
$headers[] = 'Cookie: _gcl_au=1.1.237038240.1581817904; _fbp=fb.1.1581817904207.95839901; _gcl_aw=GCL.1583084086.Cj0KCQiA1-3yBRCmARIsAN7B4H1g5aPdyBWaqI2MEqdi5G50AREL0SNmywbH12sz43BKKGOObB37DFgaAi74EALw_wcB; ab.storage.userId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2280436998%22%2C%22c%22%3A1583084122794%2C%22l%22%3A1583084122794%7D; ab.storage.deviceId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2253590208-d7a8-6f4e-ef4b-98d7cca0c5e8%22%2C%22c%22%3A1583084122796%2C%22l%22%3A1583084122796%7D; __stripe_mid=61e09f78-1d5b-4ea9-93c1-f31dea464715; ftr_ncd=6; _instacart_logged_in=1; __ssid=106e702e83f6b3b1c7176918014d7f6; amplitude_idundefinedinstacart.ca=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; node_ssr_initial_bundle=true; _derived_epik=dj0yJnU9R19id0NDb0NteHlmallobkEyN0lzZTZlZ2JLaEc2R2ombj1UQ0E2V2RTWk1qOEhZUVNqeGphbnpBJm09MSZ0PUFBQUFBRjV4b3pvJnJtPTEmcnQ9QUFBQUFGNXhvem8; __stripe_sid=c741dcab-d9df-4546-9623-d323ef4284a1; ab.storage.sessionId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%22a066dc93-56da-da8e-cd2a-04770627033b%22%2C%22e%22%3A1585359025683%2C%22c%22%3A1585357108281%2C%22l%22%3A1585357225683%7D; forterToken=7f17710264c84088a4f91e2b108554d0_1585357224734__UDF43_9ck; ajs_anonymous_id=%225cae8f81-11cb-4883-8261-2c94662f54d4%22; ahoy_visitor=eeadcda9-52c4-4bb4-b758-23f84e0d9c01; ahoy_visit=3c84e85f-6356-4f9c-9cf7-723d53623f05; ajs_user_id=null; ajs_group_id=null; build_sha=fc594ded007faf0e858a4de30ea2b4e423d2be78; _instacart_session=cmFKVURGbUxDZFM0TmtSQUorakNPajNTRnVuQ1VVQlJCQnB0ZXEzZmNDWCtDYjNKY2RmSkNQcHVTS284Ymp3a1VBS2pUUGttbTI5TU5rdHg5dGZKTUFIMXAxeXl1RUJzZmVmN1BUMW5EM2RPNFU3WWNualBXZFFKNXBWd3dlZkcyVWozRWpqOEE3RlBodWxCeHcyYzZ4R284dk9UTGRjam9ONys4cjgvMFNEUmZGK2Nha0xFMXRYOFl4S0MyZG00SlJFV2tSVXMxM2JkcmgxZTVmaXpqcCtEazVSaVFWVTY1YVd4R3A5VStESGgrZmtOS1JDRkttWE96bGZiSmdIVS0taDFRWUlVayt1cVpwRDRvdUtCOTdMQT09--96c64485ca1e424b06c917b7ccb93095b0f06c8b; amplitude_id_b87e0e586f364c2c189272540d489b01instacart.ca=eyJkZXZpY2VJZCI6ImIyNDJmZmI3LWNlYzMtNDFlYy05YjIzLTk4NmI4NjMyY2Y3NlIiLCJ1c2VySWQiOiI4MDQzNjk5OCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU4NTM1NzA3MTk3NSwibGFzdEV2ZW50VGltZSI6MTU4NTM1NzU0MDgzNiwiZXZlbnRJZCI6MzQ5LCJpZGVudGlmeUlkIjo2Nywic2VxdWVuY2VOdW1iZXIiOjQxNn0=; signup_load_perf_date=1585357540837';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);

//search endpoint
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instacart.ca/v3/containers/real-canadian-superstore/search_v3/ground%20beef?source=web&cache_key=27560a-22545-f-8c4&per=30&tracking.items_per_row=3&tracking.source_url=undefined&tracking.autocomplete_prefix=beef&tracking.autocomplete_term_impression_id=019b5566-92f2-402e-88d0-caa454783995&tracking.search_bar_impression_event_id=62a4c183-be1a-47bc-8791-1d1355742b39');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = 'Authority: www.instacart.ca';
$headers[] = 'X-Csrf-Token: QKv5FnNMr9R+9bJMBednMjI2peGVkeN6fxbVOeRa+rH7C/4swgCbmGqaR/FBywFQj7EgKqx6wx7ktLDMSA8PLg==';
$headers[] = 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36';
$headers[] = 'Content-Type: application/json';
$headers[] = 'Accept: application/json';
$headers[] = 'X-Client-Identifier: web';
$headers[] = 'X-Requested-With: XMLHttpRequest';
$headers[] = 'Sec-Fetch-Dest: empty';
$headers[] = 'Sec-Fetch-Site: same-origin';
$headers[] = 'Sec-Fetch-Mode: cors';
$headers[] = 'Referer: https://www.instacart.ca/store/real-canadian-superstore/search_v3/ground%20beef';
$headers[] = 'Accept-Language: en-US,en;q=0.9';
$headers[] = 'Cookie: _gcl_au=1.1.237038240.1581817904; _fbp=fb.1.1581817904207.95839901; _gcl_aw=GCL.1583084086.Cj0KCQiA1-3yBRCmARIsAN7B4H1g5aPdyBWaqI2MEqdi5G50AREL0SNmywbH12sz43BKKGOObB37DFgaAi74EALw_wcB; ab.storage.userId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2280436998%22%2C%22c%22%3A1583084122794%2C%22l%22%3A1583084122794%7D; ab.storage.deviceId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2253590208-d7a8-6f4e-ef4b-98d7cca0c5e8%22%2C%22c%22%3A1583084122796%2C%22l%22%3A1583084122796%7D; __stripe_mid=61e09f78-1d5b-4ea9-93c1-f31dea464715; ftr_ncd=6; _instacart_logged_in=1; __ssid=106e702e83f6b3b1c7176918014d7f6; amplitude_idundefinedinstacart.ca=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; node_ssr_initial_bundle=true; _derived_epik=dj0yJnU9R19id0NDb0NteHlmallobkEyN0lzZTZlZ2JLaEc2R2ombj1UQ0E2V2RTWk1qOEhZUVNqeGphbnpBJm09MSZ0PUFBQUFBRjV4b3pvJnJtPTEmcnQ9QUFBQUFGNXhvem8; ajs_anonymous_id=%22a6517c03-4ff4-4224-8fe9-8b44541df9ef%22; ahoy_visitor=3c330145-aa47-4e1b-96c6-15a0fc37185b; ajs_group_id=null; ajs_user_id=%2280436998%22; ahoy_visit=798ca56b-0980-4863-9163-e5f48df019e7; __stripe_sid=efa17892-827f-436a-b9e6-fcaae8bcc58d; build_sha=740b12ee8cd27f29520b4499beed43e8950aab76; ab.storage.sessionId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%22ed24ba0e-5ac7-4b6c-cf5c-9ef1c0a72caa%22%2C%22e%22%3A1586282309158%2C%22c%22%3A1586280509159%2C%22l%22%3A1586280509159%7D; forterToken=7f17710264c84088a4f91e2b108554d0_1586280508310__UDF43_9ck; amplitude_id_b87e0e586f364c2c189272540d489b01instacart.ca=eyJkZXZpY2VJZCI6ImIyNDJmZmI3LWNlYzMtNDFlYy05YjIzLTk4NmI4NjMyY2Y3NlIiLCJ1c2VySWQiOiI4MDQzNjk5OCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU4NjI3OTY4MjkxMywibGFzdEV2ZW50VGltZSI6MTU4NjI4MDUxNDU2OCwiZXZlbnRJZCI6NTI2LCJpZGVudGlmeUlkIjo4NCwic2VxdWVuY2VOdW1iZXIiOjYxMH0=; _instacart_session=UkMyVURxSHRZQTJCeEUwYmV5ZGJEVVczNHFRK0R0eFpGN1JBWXp1U3R1dHRzRENaYUZ6elV4ZjVlK0d4OEJyWXFndUZMckFmWmFhbEd0bnI0YVc3SUs4Z0k5RGVDTEZHeTZYbHNCYzhDQ0lReXNKbzVQTUIxTDhFY3FnenNZSUhBOHZNYXhrV2tNckhhYW80MWV3eE9yU0drOElEWlJaQ2hOUWZnZDluQnFScEJVeXdYUmREU3ZVMEhhS29EZG5MdWx0T0w3MElLOWlxYWdBQ091eXVLbnlMRXhVakE4c1l1Q1NyWStGYmNQOEg5ZlRodFdDeGlOaktHMnlkRkxXY0tlUGpoWUNkWkxVMHFtdThNbHR6aWJ4SmVqeFY1aW1ZRmFjMHBWM2F4Z3VMVENFUjVadk93UldZMDNYTVAzRGZMRWNhOHZCUHNJbFV3WWNQVE44dHRnPT0tLWtidHdUenhGejMwaElnNm9UQVFmTnc9PQ%3D%3D--1c01915026aa10210973dfd644cfd9aab223271c';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instacart.ca/v3/containers/real-canadian-superstore/search_v3/tomatoes?source=web&cache_key=27560a-22545-f-8c4&per=30&tracking.items_per_row=3&tracking.source_url=undefined&tracking.autocomplete_prefix=&tracking.autocomplete_term_impression_id=&tracking.search_bar_impression_event_id=');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = 'Authority: www.instacart.ca';
$headers[] = 'X-Csrf-Token: gZPjukiIE9L8E8Ldm6NC3hKCmyzahAb1fdvDdSnB9hA6M+SA+cQnnuh8N2DfjyS8rwUe5+NvJpHmeaaAhZQDjw==';
$headers[] = 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36';
$headers[] = 'Content-Type: application/json';
$headers[] = 'Accept: application/json';
$headers[] = 'X-Client-Identifier: web';
$headers[] = 'X-Requested-With: XMLHttpRequest';
$headers[] = 'Sec-Fetch-Dest: empty';
$headers[] = 'Sec-Fetch-Site: same-origin';
$headers[] = 'Sec-Fetch-Mode: cors';
$headers[] = 'Referer: https://www.instacart.ca/store/real-canadian-superstore/search_v3/tomatoes';
$headers[] = 'Accept-Language: en-US,en;q=0.9';
$headers[] = 'Cookie: _gcl_au=1.1.237038240.1581817904; _fbp=fb.1.1581817904207.95839901; _gcl_aw=GCL.1583084086.Cj0KCQiA1-3yBRCmARIsAN7B4H1g5aPdyBWaqI2MEqdi5G50AREL0SNmywbH12sz43BKKGOObB37DFgaAi74EALw_wcB; ab.storage.userId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2280436998%22%2C%22c%22%3A1583084122794%2C%22l%22%3A1583084122794%7D; ab.storage.deviceId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2253590208-d7a8-6f4e-ef4b-98d7cca0c5e8%22%2C%22c%22%3A1583084122796%2C%22l%22%3A1583084122796%7D; __stripe_mid=61e09f78-1d5b-4ea9-93c1-f31dea464715; ftr_ncd=6; _instacart_logged_in=1; __ssid=106e702e83f6b3b1c7176918014d7f6; amplitude_idundefinedinstacart.ca=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; node_ssr_initial_bundle=true; _derived_epik=dj0yJnU9R19id0NDb0NteHlmallobkEyN0lzZTZlZ2JLaEc2R2ombj1UQ0E2V2RTWk1qOEhZUVNqeGphbnpBJm09MSZ0PUFBQUFBRjV4b3pvJnJtPTEmcnQ9QUFBQUFGNXhvem8; ajs_anonymous_id=%22a6517c03-4ff4-4224-8fe9-8b44541df9ef%22; ahoy_visitor=3c330145-aa47-4e1b-96c6-15a0fc37185b; ajs_group_id=null; ajs_user_id=%2280436998%22; ahoy_visit=7d1d87b1-5565-4531-9344-ba3dac0f4020; amplitude_id_b87e0e586f364c2c189272540d489b01instacart.ca=eyJkZXZpY2VJZCI6ImIyNDJmZmI3LWNlYzMtNDFlYy05YjIzLTk4NmI4NjMyY2Y3NlIiLCJ1c2VySWQiOiI4MDQzNjk5OCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU4NjI4OTM3NjA0NSwibGFzdEV2ZW50VGltZSI6MTU4NjI4OTM3NjA0NSwiZXZlbnRJZCI6NTM3LCJpZGVudGlmeUlkIjo4NCwic2VxdWVuY2VOdW1iZXIiOjYyMX0=; build_sha=4b3c3a95cedea768e270a541ae4a4942a35a77e0; __stripe_sid=3405ea50-6f62-4e89-8f7a-c2f1fe5770a9; _instacart_session=cHB1WER3SnRUcFoyVmV4QjdXbTFXWDgzMXQ5ZUswd1BERzJ5UEo1TklBTjlaYlloK0lYNWFBMzdXTStoN05WYVRUWHFVZWJyZCs0a3B3OXFjU0lGNUdZVk1ySTh4UXRoandkcGh4UmN3VmpIZ1JxL1NvcXNMc054NWhoeU9FWk9SU3pCbzR6Mm9NaHFxdGlzRXpLem5GNFpxeEkyblBSb2ZBWWNXYm9RQVkwMko2T016OXVhSXlEcHdZYm9QQmdpVjh6TjZMMHFMdDFZRVcydkg2Rit3ZGkxeUdEcWlQdytWVHMvVEtmWkE3MWVKK1B5Tm9sbzhOQUNUM0ZhalJQVkVaUjA1cnVmVFFiZW5zcE53YkI2RDVZTzkxc01TZFRyN1pkdUZLMXNxOXIwZUovWnN4aGUxYUFFODcrdjVlcW1PbkxvckNBbXRsRjlkVk1WTXFiakF3PT0tLUw1clVjcWUrNTRqNWZ5dklHeDF4bWc9PQ%3D%3D--2f1b3f5a66a45fc16e06f079eb19691ee5047433; ab.storage.sessionId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%22b6ff9a76-acde-d5b1-fe01-f9c8bb8e67d2%22%2C%22e%22%3A1586291213063%2C%22c%22%3A1586289413064%2C%22l%22%3A1586289413064%7D; forterToken=7f17710264c84088a4f91e2b108554d0_1586289411801__UDF4_9ck';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);
//add to cart endpoint

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instacart.ca/v3/carts/54133112/update_items?source=web&cache_key=27560a-22545-f-8c4');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');

curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"items\":[{\"item_id\":\"item_539286064\",\"quantity\":0.5,\"source_type\":\"search\",\"source_value\":\"tomatoes\",\"tracking\":{\"source_type\":\"search\",\"source_value\":\"tomatoes\",\"item_id\":539286064,\"original_position\":1,\"availability_model_score\":0.964,\"product_id\":17968725,\"price_bucket\":8,\"aisle_name\":\"Fresh Vegetables\",\"display_name\":\"Un Branded Red Beefsteak Tomato\",\"item_card_impression_id\":\"a1702154-1829-4c94-99ba-f56b1de62e21\",\"analytics_debug\":false,\"api_version\":\"3\",\"country_id\":124,\"currency\":\"CAD\",\"guest\":false,\"inventory_area_id\":22545,\"inventory_area_id_list\":[22545],\"is_new_user\":true,\"platform\":\"web\",\"region\":\"Calgary, AB\",\"region_id\":235,\"service_type\":\"delivery\",\"user_id\":80436998,\"warehouse_id\":351,\"warehouse_id_list\":[351],\"whitelabel_id\":1,\"whitelabel_retailer\":\"instacart\",\"wl_exclusive\":\"instacart\",\"zip_active\":true,\"zip_code\":\"T4B3V1\",\"zone_id\":1550,\"ahoy_visit_token\":\"7d1d87b1-5565-4531-9344-ba3dac0f4020\",\"ahoy_visitor_token\":\"3c330145-aa47-4e1b-96c6-15a0fc37185b\",\"m_id\":\"4b26576bc27b7d8f304bc7c5ef550bf3dfda12e9a9d487c8a0c6b64a23af6a09\",\"user_channel_1\":\"store\",\"storefront_ssr_initial_bundle\":true,\"root_search_id\":\"28b1f2ee-b71d-45fd-a51d-fd2123af64ab\",\"search_id\":\"28b1f2ee-b71d-45fd-a51d-fd2123af64ab\",\"page_view_id\":\"4c0a426b-fddb-4032-8035-e245fa74ae18\",\"product_flow\":\"store\",\"cart_instance_id\":\"33d8141ac768c1d1fe2a791d5e3fe79c\",\"page_type\":\"search\",\"search_term\":\"tomatoes\",\"source\":\"web\",\"module_position\":2,\"cartQty\":0,\"qtyDiff\":0.5,\"source3\":null},\"item_tasks\":[],\"qty_type\":null}],\"request_timestamp\":1586290255465,\"options\":{\"assign_to_first_journey_instructions\":true}}");
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = 'Authority: www.instacart.ca';
$headers[] = 'X-Csrf-Token: RTaLnFu6uIVJdRnzxiPreZGqw++jS22D/j7A64H1/Qj+loym6vaMyV0a7E6CD40bLC1GJJqgTedlnKUeLaAIlw==';
$headers[] = 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36';
$headers[] = 'Content-Type: application/json';
$headers[] = 'Accept: application/json';
$headers[] = 'X-Client-Identifier: web';
$headers[] = 'X-Requested-With: XMLHttpRequest';
$headers[] = 'Sec-Fetch-Dest: empty';
$headers[] = 'Origin: https://www.instacart.ca';
$headers[] = 'Sec-Fetch-Site: same-origin';
$headers[] = 'Sec-Fetch-Mode: cors';
$headers[] = 'Referer: https://www.instacart.ca/store/real-canadian-superstore/search_v3/tomatoes';
$headers[] = 'Accept-Language: en-US,en;q=0.9';
$headers[] = 'Cookie: _gcl_au=1.1.237038240.1581817904; _fbp=fb.1.1581817904207.95839901; _gcl_aw=GCL.1583084086.Cj0KCQiA1-3yBRCmARIsAN7B4H1g5aPdyBWaqI2MEqdi5G50AREL0SNmywbH12sz43BKKGOObB37DFgaAi74EALw_wcB; ab.storage.userId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2280436998%22%2C%22c%22%3A1583084122794%2C%22l%22%3A1583084122794%7D; ab.storage.deviceId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2253590208-d7a8-6f4e-ef4b-98d7cca0c5e8%22%2C%22c%22%3A1583084122796%2C%22l%22%3A1583084122796%7D; __stripe_mid=61e09f78-1d5b-4ea9-93c1-f31dea464715; ftr_ncd=6; _instacart_logged_in=1; __ssid=106e702e83f6b3b1c7176918014d7f6; amplitude_idundefinedinstacart.ca=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; node_ssr_initial_bundle=true; _derived_epik=dj0yJnU9R19id0NDb0NteHlmallobkEyN0lzZTZlZ2JLaEc2R2ombj1UQ0E2V2RTWk1qOEhZUVNqeGphbnpBJm09MSZ0PUFBQUFBRjV4b3pvJnJtPTEmcnQ9QUFBQUFGNXhvem8; ajs_anonymous_id=%22a6517c03-4ff4-4224-8fe9-8b44541df9ef%22; ahoy_visitor=3c330145-aa47-4e1b-96c6-15a0fc37185b; ajs_group_id=null; ajs_user_id=%2280436998%22; ahoy_visit=7d1d87b1-5565-4531-9344-ba3dac0f4020; build_sha=4b3c3a95cedea768e270a541ae4a4942a35a77e0; __stripe_sid=3405ea50-6f62-4e89-8f7a-c2f1fe5770a9; ab.storage.sessionId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%22b6ff9a76-acde-d5b1-fe01-f9c8bb8e67d2%22%2C%22e%22%3A1586291222363%2C%22c%22%3A1586289413064%2C%22l%22%3A1586289422363%7D; forterToken=7f17710264c84088a4f91e2b108554d0_1586289421580__UDF43_9ck; _instacart_session=STV2TWdRbXZCL21DNUY3MzNTc0FkN1dNb0l2Y3NvU1AwTW9KVVRqVjR1V0Y0NS9SRzkremppYXBHb1RBb24wdjAzc2FuZzBRSmpYM3RTV2JyY05QSmNYWnh4cHhFcklmeGFuZDhqM00ydlNmeURzSmFWTVIwcnlpRHNMTXVIOEo2R2I3dGxrSUhROTZySmtMUTF1VzdGT0JWT1JOemVoUnpjNDE5M2R1UW9SVWZkM1VIMWRkNGpCd2x3SkQxSk5sNUVUd25YMEk3b0lDM0VmaDhPL25ZK0RLeGJyK1E1OXV3R080VDg1cjdFNnRRQmxNUGJRTmtMdk56cEdscmJuaUllajQwY1kxcS9zeWRPd0lZUkdSOXJOZWRoa1RPWHZCcWlFaWZzRnJnSEdMd1JtVHRMRlhQV3paeEpKampvby9LRTJBTElOVGxDUEhFN0dtdk1uYzZnPT0tLTZJRVd6czJRN1c1TnRQb0diM2VxaHc9PQ%3D%3D--53d25903030e3cec4bcdde09b69b417b4075c3e3; amplitude_id_b87e0e586f364c2c189272540d489b01instacart.ca=eyJkZXZpY2VJZCI6ImIyNDJmZmI3LWNlYzMtNDFlYy05YjIzLTk4NmI4NjMyY2Y3NlIiLCJ1c2VySWQiOiI4MDQzNjk5OCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU4NjI4OTM3NjA0NSwibGFzdEV2ZW50VGltZSI6MTU4NjI5MDI1NTU4NCwiZXZlbnRJZCI6NTQ5LCJpZGVudGlmeUlkIjo4OCwic2VxdWVuY2VOdW1iZXIiOjYzN30=';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://mgs-edge.instacart.com/mgs/v1/e/t?source=web&cache_key=27560a-22545-f-8c4');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"events\":[{\"event\":\"cart.add_item\",\"user\":\"user/80436998\",\"properties\":{\"analytics_debug\":false,\"api_version\":\"3\",\"country_id\":124,\"currency\":\"CAD\",\"guest\":false,\"inventory_area_id\":22545,\"inventory_area_id_list\":[22545],\"is_new_user\":true,\"platform\":\"web\",\"region\":\"Calgary, AB\",\"region_id\":235,\"service_type\":\"delivery\",\"warehouse_id\":351,\"warehouse_id_list\":[351],\"whitelabel_id\":1,\"whitelabel_retailer\":\"instacart\",\"wl_exclusive\":\"instacart\",\"zip_active\":true,\"zip_code\":\"T4B3V1\",\"zone_id\":1550,\"ahoy_visit_token\":\"7d1d87b1-5565-4531-9344-ba3dac0f4020\",\"ahoy_visitor_token\":\"3c330145-aa47-4e1b-96c6-15a0fc37185b\",\"m_id\":\"4b26576bc27b7d8f304bc7c5ef550bf3dfda12e9a9d487c8a0c6b64a23af6a09\",\"user_channel_1\":\"store\",\"storefront_ssr_initial_bundle\":true,\"adblock_present\":false,\"from_item_modal\":false,\"is_express_member\":false,\"referrer_domain\":\"https://www.instacart.ca/store/real-canadian-superstore/storefront\",\"source\":\"web\",\"renderer\":\"nodejs\",\"oauth_application_id\":\"1\",\"store_configuration_id\":\"1\",\"wl_order_count\":0,\"wl_order_count_last_month\":0,\"source_type\":\"search\",\"source_value\":\"tomatoes\",\"item_id\":539286064,\"original_position\":1,\"availability_model_score\":0.964,\"product_id\":17968725,\"price_bucket\":8,\"aisle_name\":\"Fresh Vegetables\",\"display_name\":\"Un Branded Red Beefsteak Tomato\",\"item_card_impression_id\":\"a1702154-1829-4c94-99ba-f56b1de62e21\",\"root_search_id\":\"28b1f2ee-b71d-45fd-a51d-fd2123af64ab\",\"search_id\":\"28b1f2ee-b71d-45fd-a51d-fd2123af64ab\",\"page_view_id\":\"4c0a426b-fddb-4032-8035-e245fa74ae18\",\"product_flow\":\"store\",\"cart_instance_id\":\"33d8141ac768c1d1fe2a791d5e3fe79c\",\"page_type\":\"search\",\"search_term\":\"tomatoes\",\"module_position\":2,\"cartQty\":0,\"qtyDiff\":0.5,\"items_count\":1,\"pathname\":\"/store/real-canadian-superstore/search_v3/tomatoes\"},\"context\":{\"page\":{\"path\":\"/store/real-canadian-superstore/search_v3/tomatoes\",\"referrer\":\"https://www.instacart.ca/store/real-canadian-superstore/storefront\",\"search\":\"\",\"title\":\"Instacart - tomatoes\",\"url\":\"https://www.instacart.ca/store/real-canadian-superstore/search_v3/tomatoes\"},\"library\":{\"name\":\"mongoose.js\",\"version\":\"0.1.0\"},\"userAgent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36\"},\"store_context\":\"marketplace/1\",\"routing_keys\":[\"store_context/marketplace/1\"],\"project\":\"customers-prod\"}]}");
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = 'Authority: mgs-edge.instacart.com';
$headers[] = 'Sec-Fetch-Dest: empty';
$headers[] = 'Mongoose-Auth-Key: peKxEUHTg%GZPsFirRbUMy6hR';
$headers[] = 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36';
$headers[] = 'Content-Type: text/plain;charset=UTF-8';
$headers[] = 'Accept: */*';
$headers[] = 'Origin: https://www.instacart.ca';
$headers[] = 'Sec-Fetch-Site: cross-site';
$headers[] = 'Sec-Fetch-Mode: cors';
$headers[] = 'Referer: https://www.instacart.ca/store/real-canadian-superstore/search_v3/tomatoes';
$headers[] = 'Accept-Language: en-US,en;q=0.9';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);

//payload {"events":[{"event":"cart.add_item","user":"user/80436998","properties":{"analytics_debug":false,"api_version":"3","country_id":124,"currency":"CAD","guest":false,"inventory_area_id":22545,"inventory_area_id_list":[22545],"is_new_user":true,"platform":"web","region":"Calgary, AB","region_id":235,"service_type":"delivery","warehouse_id":351,"warehouse_id_list":[351],"whitelabel_id":1,"whitelabel_retailer":"instacart","wl_exclusive":"instacart","zip_active":true,"zip_code":"T4B3V1","zone_id":1550,"ahoy_visit_token":"7d1d87b1-5565-4531-9344-ba3dac0f4020","ahoy_visitor_token":"3c330145-aa47-4e1b-96c6-15a0fc37185b","m_id":"4b26576bc27b7d8f304bc7c5ef550bf3dfda12e9a9d487c8a0c6b64a23af6a09","user_channel_1":"store","storefront_ssr_initial_bundle":true,"adblock_present":false,"from_item_modal":false,"is_express_member":false,"referrer_domain":"https://www.instacart.ca/store/real-canadian-superstore/storefront","source":"web","renderer":"nodejs","oauth_application_id":"1","store_configuration_id":"1","wl_order_count":0,"wl_order_count_last_month":0,"source_type":"search","source_value":"tomatoes","item_id":539286064,"original_position":1,"availability_model_score":0.964,"product_id":17968725,"price_bucket":8,"aisle_name":"Fresh Vegetables","display_name":"Un Branded Red Beefsteak Tomato","item_card_impression_id":"a1702154-1829-4c94-99ba-f56b1de62e21","root_search_id":"28b1f2ee-b71d-45fd-a51d-fd2123af64ab","search_id":"28b1f2ee-b71d-45fd-a51d-fd2123af64ab","page_view_id":"4c0a426b-fddb-4032-8035-e245fa74ae18","product_flow":"store","cart_instance_id":"33d8141ac768c1d1fe2a791d5e3fe79c","page_type":"search","search_term":"tomatoes","module_position":2,"cartQty":0,"qtyDiff":0.5,"items_count":1,"pathname":"/store/real-canadian-superstore/search_v3/tomatoes"},"context":{"page":{"path":"/store/real-canadian-superstore/search_v3/tomatoes","referrer":"https://www.instacart.ca/store/real-canadian-superstore/storefront","search":"","title":"Instacart - tomatoes","url":"https://www.instacart.ca/store/real-canadian-superstore/search_v3/tomatoes"},"library":{"name":"mongoose.js","version":"0.1.0"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"},"store_context":"marketplace/1","routing_keys":["store_context/marketplace/1"],"project":"customers-prod"}]}

//store availablity

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://www.instacart.ca/v3/retailers/351/availability?source=web&cache_key=&source1=storefront');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = 'Authority: www.instacart.ca';
$headers[] = 'X-Csrf-Token: ';
$headers[] = 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36';
$headers[] = 'Content-Type: application/json';
$headers[] = 'Accept: application/json';
$headers[] = 'X-Client-Identifier: web';
$headers[] = 'X-Requested-With: XMLHttpRequest';
$headers[] = 'Sec-Fetch-Dest: empty';
$headers[] = 'Sec-Fetch-Site: same-origin';
$headers[] = 'Sec-Fetch-Mode: cors';
$headers[] = 'Referer: https://www.instacart.ca/store/real-canadian-superstore/search_v3/tomatoes';
$headers[] = 'Accept-Language: en-US,en;q=0.9';
$headers[] = 'Cookie: _gcl_au=1.1.237038240.1581817904; _fbp=fb.1.1581817904207.95839901; _gcl_aw=GCL.1583084086.Cj0KCQiA1-3yBRCmARIsAN7B4H1g5aPdyBWaqI2MEqdi5G50AREL0SNmywbH12sz43BKKGOObB37DFgaAi74EALw_wcB; ab.storage.userId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2280436998%22%2C%22c%22%3A1583084122794%2C%22l%22%3A1583084122794%7D; ab.storage.deviceId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%2253590208-d7a8-6f4e-ef4b-98d7cca0c5e8%22%2C%22c%22%3A1583084122796%2C%22l%22%3A1583084122796%7D; __stripe_mid=61e09f78-1d5b-4ea9-93c1-f31dea464715; ftr_ncd=6; _instacart_logged_in=1; __ssid=106e702e83f6b3b1c7176918014d7f6; amplitude_idundefinedinstacart.ca=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; node_ssr_initial_bundle=true; _derived_epik=dj0yJnU9R19id0NDb0NteHlmallobkEyN0lzZTZlZ2JLaEc2R2ombj1UQ0E2V2RTWk1qOEhZUVNqeGphbnpBJm09MSZ0PUFBQUFBRjV4b3pvJnJtPTEmcnQ9QUFBQUFGNXhvem8; ajs_anonymous_id=%22a6517c03-4ff4-4224-8fe9-8b44541df9ef%22; ahoy_visitor=3c330145-aa47-4e1b-96c6-15a0fc37185b; ajs_group_id=null; ajs_user_id=%2280436998%22; ahoy_visit=7d1d87b1-5565-4531-9344-ba3dac0f4020; build_sha=4b3c3a95cedea768e270a541ae4a4942a35a77e0; __stripe_sid=3405ea50-6f62-4e89-8f7a-c2f1fe5770a9; ab.storage.sessionId.6f8d91cb-99e4-4ad7-ae83-652c2a2c845d=%7B%22g%22%3A%22b6ff9a76-acde-d5b1-fe01-f9c8bb8e67d2%22%2C%22e%22%3A1586291213063%2C%22c%22%3A1586289413064%2C%22l%22%3A1586289413064%7D; amplitude_id_b87e0e586f364c2c189272540d489b01instacart.ca=eyJkZXZpY2VJZCI6ImIyNDJmZmI3LWNlYzMtNDFlYy05YjIzLTk4NmI4NjMyY2Y3NlIiLCJ1c2VySWQiOiI4MDQzNjk5OCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU4NjI4OTM3NjA0NSwibGFzdEV2ZW50VGltZSI6MTU4NjI4OTQxNTAzNCwiZXZlbnRJZCI6NTQyLCJpZGVudGlmeUlkIjo4Niwic2VxdWVuY2VOdW1iZXIiOjYyOH0=; _instacart_session=WUxoZzlqK2hqd0JUVTMwUmEvbTZ4cEsyNVZsTDlIei9aS1FpenZHdy9ZSkRkRVk3SWxsOGdlT0pKWE1ibjBKZWpFU1JjYUp2U01VUkNwKzJBbjFNa0NZRkFxUkpDeUJ4a3hMSmpTZkt1cTlwK09vZmhKTVR4SjQwcEdPZWV1RjJ2N0wxNTF6TTlFTlFpVXU3WjJ1a2dZOURIb2dzUE9oZHdoMTBwR05HNS9lWk1qV2ZEeTkzL0NhcE40UWplUi9ZUmoxV3RSN1pSNXFXdTlvdGhIUndxWnF4bXF0OWx3SS9ZbDdmVnJER1p3UGl6dW1pVy9GZE8zS1h0dVV6d3dxT3JmMGlHU3MvdEd2cXcvSWk5ZHo1ZE5SWm83MTB5cTVrb0V6cHlUY21NY0tSOVVscmVKOGhxS1NoSFZpS1o3ckhaY1IrOWx1UVVVM3d1SldUYk53bWlRPT0tLXpPNjVrQ0phMWd3YS9ETVJHeGlMclE9PQ%3D%3D--c015ab4c1f52e8eecccf989ca81553562a87ee11; forterToken=7f17710264c84088a4f91e2b108554d0_1586289421580__UDF43_9ck';
$headers[] = 'If-None-Match: W/\"5e708437ed8a49d7b9b6380d5dbeeba7\"';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);
?>
