//
//  global.swift
//  Core
//
//  Created by Chris Brind on 27/04/2018.
//  Copyright © 2018 DuckDuckGo. All rights reserved.
//

import Foundation

var appDocPath: URL {
    let paths = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)
    return URL(fileURLWithPath: paths[0])
}
