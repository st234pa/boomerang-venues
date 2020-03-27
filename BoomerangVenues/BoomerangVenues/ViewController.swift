//
//  ViewController.swift
//  BoomerangVenues
//
//  Created by STmb2 on 3/26/20.
//  Copyright © 2020 Stephanie Yoon. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {

    @IBOutlet var webView: WKWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let url = URL(string: "http://localhost:3000/")
        let request = URLRequest(url: url!)
        webView.load(request)
        print("loaded url")
    }


}

