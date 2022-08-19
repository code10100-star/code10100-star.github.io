import 'package:flutter/material.dart';

class Result extends StatelessWidget {
  final int resultScore;
  final Function() resetHandler;
  Result(this.resultScore,this.resetHandler);

  String get resultPhrase {
    var resultPhrase = "You did it";
    if (resultScore <= 8) {
      resultPhrase = "You are awesome and innocent";
    } else if (resultScore <= 12) {
      resultPhrase = "pretty likable";
    } else if (resultScore <= 16) {
      resultPhrase = "you are ... strange";
    } else {
      resultPhrase = "you are bad";
    }
    return resultPhrase;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          Text(
            resultPhrase,
            style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),
          TextButton(onPressed: resetHandler, child: Text("Restart quiz!!"))
        ],
      ),
    );
  }
}
