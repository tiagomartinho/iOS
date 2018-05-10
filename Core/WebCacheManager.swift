//
//  WebCacheManager.swift
//  DuckDuckGo
//
//  Copyright © 2017 DuckDuckGo. All rights reserved.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//


import WebKit

public class WebCacheManager {

    public static var ddgCookies = [String: HTTPCookie]()

    private struct Constants {
        static let internalCache = "duckduckgo.com"
    }
    
    private static var allData: Set<String> {
        return WKWebsiteDataStore.allWebsiteDataTypes()
    }
    
    private static var dataStore: WKWebsiteDataStore {
        return WKWebsiteDataStore.default()
    }

    /**
     Clears the cache of all external (non-duckduckgo) data
     */
    public static func clear(completionHandler: @escaping () -> Void) {
        print("***", allData)

        if #available(iOS 11, *) {
            dataStore.httpCookieStore.getAllCookies { cookies in
                for cookie in cookies.filter({ $0.domain == Constants.internalCache }) {
                    ddgCookies[cookie.name] = cookie
                }
            }
        }

        dataStore.fetchDataRecords(ofTypes: allData) { records in
            dataStore.removeData(ofTypes: allData, modifiedSince: Date(timeIntervalSince1970: 0.0)) {
                print("*** all data removed")
            }
        }

    }

}
