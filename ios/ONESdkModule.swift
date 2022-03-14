//
//  ONESdkModule.swift
//  ONESdkModule
//
//  Copyright © 2022 ONE Finance LLC. All rights reserved.
//

import Foundation

@objc(ONESdkModule)
class ONESdkModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
