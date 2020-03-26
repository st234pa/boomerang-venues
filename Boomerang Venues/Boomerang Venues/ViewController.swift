//
//  ViewController.swift
//  Boomerang Venues
//
//  Created by Stephanie Yoon on 3/26/20.
//  Copyright © 2020 Stephanie Yoon. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    
    @IBOutlet weak var webView: WKWebView!
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let url = URL(string:"https://www.google.com")
        let request = URLRequest(url: url!)
        webView.load(request)
    }


}

