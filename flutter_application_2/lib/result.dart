import 'package:flutter/material.dart';

class Result extends StatelessWidget {
  final result;
  Result(this.result);
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
      width: 300,
      decoration: BoxDecoration(
        border: Border.all(color: Colors.orange, width: 2.0),
      ),
      child: Text(
        result[0],
        style: TextStyle(fontSize: 20),
      ),
    );
  }
}
